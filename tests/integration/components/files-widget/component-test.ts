import { click, render } from '@ember/test-helpers';
import { animationsSettled } from 'ember-animated/test-support';
import { ModelInstance } from 'ember-cli-mirage';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupRenderingTest } from 'ember-qunit';
import { TestContext } from 'ember-test-helpers';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';
import { module, test } from 'qunit';

import File from 'ember-osf-web/models/file';
import { Permission } from 'ember-osf-web/models/osf-model';
import CurrentUser from 'ember-osf-web/services/current-user';

interface ThisTestContext extends TestContext {
    currentUser: CurrentUser;
}

type Field = 'name' | 'date-modified';
type Order = 'ascending' | 'descending';

function getItemAttr(field: Field) {
    const selector = `[data-test-file-${field}]`;
    const elements = [...document.querySelectorAll(selector)];

    return elements.map((elt: Element) => elt.innerHTML.trim());
}

function assertOrdered(assert: Assert, field: Field, order: Order, expected: string[]) {
    const actual = getItemAttr(field);
    assert.deepEqual(actual, expected, `can sort items ${name} in ${order} order`);
}

function convertDate(item: ModelInstance<File>): string {
    return moment(item.dateModified).format('YYYY-MM-DD hh:mm A');
}

module('Integration | Component | files-widget', hooks => {
    setupRenderingTest(hooks);
    setupMirage(hooks);

    hooks.beforeEach(function(this: ThisTestContext) {
        this.store = this.owner.lookup('service:store');
        this.currentUser = this.owner.lookup('service:current-user');
    });

    test('it renders, list node files', async function(this: ThisTestContext, assert) {
        const mirageNode = server.create('node',
            { currentUserPermissions: Object.values(Permission) },
            'withFiles');

        const [osfstorage] = mirageNode.files.models;
        const count = osfstorage.files.models.length;

        const node = await this.store.findRecord('node', mirageNode.id);
        this.set('node', node);
        await render(hbs`<Files::Widget @node={{this.node}} />`);

        assert.dom('#files-widget-dropzone').exists();
        assert.dom('[data-test-file-browser-list]').isVisible();
        assert.dom('[data-test-file-row]').exists({ count });
    });

    test('can sort files by name and date', async function(this: ThisTestContext, assert) {
        const mirageNode = server.create('node', { currentUserPermissions: Object.values(Permission) });

        const osfstorage = server.create('file-provider', { node: mirageNode });
        const folderOne = server.create('file',
            { target: mirageNode, name: 'c', dateModified: new Date(2019, 1, 1) }, 'asFolder');
        const fileOne = server.create('file',
            { target: mirageNode, name: 'a', dateModified: new Date(2019, 3, 3) });
        const fileTwo = server.create('file',
            { target: mirageNode, name: 'b', dateModified: new Date(2019, 2, 2) });

        osfstorage.update({
            files: [fileOne, fileTwo, folderOne],
        });

        const node = await this.store.findRecord('node', mirageNode.id);
        this.set('node', node);
        await render(hbs`<Files::Widget @node={{this.node}} />`);

        let expected;

        assert.dom('[data-test-ascending-sort="name"]').isVisible();
        await click('[data-test-ascending-sort="name"]');
        expected = [folderOne.name, fileOne.name, fileTwo.name];
        assertOrdered(assert, 'name', 'ascending', expected);

        assert.dom('[data-test-descending-sort="name"]').isVisible();
        await click('[data-test-descending-sort="name"]');
        expected = [folderOne.name, fileTwo.name, fileOne.name];
        assertOrdered(assert, 'name', 'descending', expected);

        assert.dom('[data-test-ascending-sort="dateModified"]').isVisible();
        await click('[data-test-ascending-sort="dateModified"]');
        expected = [folderOne, fileTwo, fileOne].map(convertDate);
        assertOrdered(assert, 'date-modified', 'ascending', expected);

        assert.dom('[data-test-descending-sort="dateModified"]').isVisible();
        await click('[data-test-descending-sort="dateModified"]');
        expected = [folderOne, fileOne, fileTwo].map(convertDate);
        assertOrdered(assert, 'date-modified', 'descending', expected);
    });

    test('show selected items', async function(this: ThisTestContext, assert) {
        const mirageNode = server.create('node', { currentUserPermissions: Object.values(Permission) }, 'withFiles');
        const node = await this.store.findRecord('node', mirageNode.id);

        this.set('node', node);

        await render(hbs`<Files::Widget @node={{this.node}} />`);

        assert.dom('[data-test-file-row]:first-child').isVisible();

        await click('[data-test-file-browser-item]:first-child');
        await animationsSettled();

        assert.dom('[data-test-selected-files]').isVisible();
        assert.dom('[data-test-selected-file]').exists({ count: 1 });

        await click('[data-test-unselect-file]');
        await animationsSettled();

        assert.dom('[data-test-selected-file]').doesNotExist();
    });

    test('navigate between folders', async function(this: ThisTestContext, assert) {
        const mirageNode = server.create('node',
            { currentUserPermissions: Object.values(Permission) }, 'withFiles');
        const folder = server.create('file', { target: mirageNode }, 'asFolder');
        const [osfstorage] = mirageNode.files.models;
        const folderItems = server.createList('file', 6, { target: mirageNode, parentFolder: folder });

        osfstorage.files.models.pushObject(folder);
        osfstorage.save();

        const node = await this.store.findRecord('node', mirageNode.id);
        this.set('node', node);

        await render(hbs`<Files::Widget @node={{this.node}} />`);

        assert.dom('[data-test-file-browser-list]').isVisible();
        assert.dom('[data-test-file-row]').exists({ count: osfstorage.files.models.length });

        // Navigate to child folder.
        await click('[data-test-file-browser-item]:first-child');
        await animationsSettled();

        assert.dom('[data-test-file-row]').exists({ count: folderItems.length });
        assert.dom('[data-test-current-folder]').isVisible();
        assert.dom('[data-test-current-folder] .fa-angle-left').isVisible();

        let actualfolderItems = getItemAttr('name');
        assert.deepEqual(actualfolderItems.sort(), folderItems.mapBy('name').sort());

        // Navigate back to root folder.
        await click('[data-test-file-browser-item]:first-child');
        await animationsSettled();

        actualfolderItems = getItemAttr('name');
        assert.dom('[data-test-current-folder]').isNotVisible();
        assert.dom('[data-test-file-row]').exists({ count: osfstorage.files.models.length });
        assert.deepEqual(actualfolderItems.sort(), osfstorage.files.models.mapBy('name').sort());
    });

    test('no files, shows upload placeholder ', async function(this: ThisTestContext, assert) {
        const mirageNode = server.create('node', { currentUserPermissions: Object.values(Permission) });

        server.create('file-provider', { node: mirageNode });
        const node = await this.store.findRecord('node', mirageNode.id);

        this.set('node', node);
        await render(hbs`<Files::Widget @node={{this.node}} />`);

        assert.dom('[data-test-no-files-placeholder]').isVisible('Shows drag and drop files to upload in folder');
    });

    test('load more files', async function(this: ThisTestContext, assert) {
        const mirageNode = server.create('node', { currentUserPermissions: Object.values(Permission) });

        const totalCount = 15;
        const pageSize = 10;
        const files = server.createList('file', totalCount, { target: mirageNode });
        const osfstorage = server.create('file-provider', { node: mirageNode });

        osfstorage.update({ files });

        const node = await this.store.findRecord('node', mirageNode.id);
        this.set('node', node);

        await render(hbs`<Files::Widget @node={{this.node}} />`);

        assert.dom('[data-test-file-browser-list]').isVisible();
        assert.dom('[data-test-file-row]').exists({ count: pageSize });
        assert.dom('[data-test-load-more-items]').exists();

        await click('[data-test-load-more-items]');

        assert.dom('[data-test-file-row]').exists({ count: totalCount });
    });
});
