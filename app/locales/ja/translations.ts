/* tslint:disable:object-literal-sort-keys max-line-length */

export default {
    general: {
        OSF: 'OSF',
        share: '共有',
        embed: '埋込み',
        download: 'ダウンロード',
        delete: '削除',
        view: '表示',
        edit: '編集',
        cancel: 'キャンセル',
        revisions: '修正',
        md5: 'MD5',
        date: '日付',
        sha2: 'SHA2',
        title: 'タイトル',
        contributors: '共同研究者',
        modified: '変更',
        description: '説明',
        create: '作成',
        and: 'and',
        more: '詳細',
        upload: 'アップロード',
        rename: '名前の変更',
        move: '移動',
        name: 'ファイル名',
        size: 'ファイルサイズ',
        version: 'バージョン',
        downloads: 'ダウンロード',
        close: '閉じる',
        back: '戻る',
        filter: 'フィルター',
        revert: '復帰',
        save: '保存',
        ellipses: '\u2026',
        warning: '警告',
        clipboard_copy: 'クリップボードへコピー',
        sort_asc: '昇順ソート',
        sort_desc: '降順ソート',
        next: '次へ',
        previous: '戻る',
        help: 'ヘルプ',
        api: 'API',
        cos: 'Center for Open Science',
        home: 'Home',
    },
    maintenance: {
        line1: '本サイトは<strong>{{start}}から{{end}}</strong> ({{utc}} UTC)時の間メンテナンスを実施します。',
        line2: 'ご不自由をおかけいたしますが、ご協力どうぞよろしくお願いいたします。',
        title: 'お知らせ:',
    },
    quickfiles: {
        title: '{{user-name}} のクイックファイル',
        description: 'ここにアップロードされたファイルは<b>一般公開</b>されており、共有リンクを使用して他のユーザーと簡単に共有できます。',
        feedback_dialog_text: 'クイックファイルの考え方を我々に教えて下さい',
        transition_auth: 'クイックファイルを表示するには、ログインしている必要があります。ログインページにリダイレクトします。',
    },
    feedback: {
        button_text: 'フィードバック',
        placeholder: 'フィードバックをシェア',
        follow_up_label: 'OSFを改善するさらなる機会について私に連絡してください',
        title: 'フィードバックの提出',
        confirm_button_text: '送信',
        thank_you: 'ありがとうございます',
        success: 'あなたからのフィードバックは提出されました',
        dismiss: '了解',
    },
    file_detail: {
        version: {
            id: 'バージョンID',
            title: '(バージョン: {{version-number}})',
        },
        embed: {
            dynamic: 'JavaScriptを用いたダイレクトレンダーiframe',
            direct: '高さと幅を固定したダイレクトiframe',
        },
        tags: 'タグ:',
        toggle: 'ビュー切替:',
        delete_file: {
            question: 'ファイルを削除しますか？',
            confirm: '本当に <b>{{file-name}}</b> を削除してもよろしいでしょうか？',
        },
        sha2_description: 'SHA-2は、データの完全性を検証するために使用されるNSAによって設計された暗号ハッシュ関数です。',
        md5_description: 'MD5は、データの完全性を検証するために使用されるアルゴリズムです。',
        // toast messages
        delete_success: 'ファイルが削除されました',
        delete_fail: 'エラー、ファイルを削除できません',
        save_success: 'ファイルが保存されました',
        save_fail: 'エラー、ファイルを保存できません',
        mfr_iframe_title: 'ドキュメントのレンダリング',
        add_tag: '検索性を高めるタグを追加する',
    },
    file_browser: {
        loading: 'ローディング中...',
        delete_multiple: '複数削除',
        download_zip: 'Zipとしてダウンロード',
        drop_placeholder: 'アップロードするファイルをここにドロップ',
        drop_reminder: 'アップロードするファイルをドロップ',
        no_files: 'このユーザーはクイックファイルをアップロードしていません',
        share_title: '共有',
        clipboard_copy: 'クリップボードへコピー',
        info: {
            title: 'ファイルブラウザの使い方',
            upload: '<b>アップロード:</b>ドラッグアンドドロップまたはアップロードボタンをクリックして、ファイルをアップロードします。',
            select: '<b>行を選択:</b>行をクリックすると、ツールバーにさらにアクションが表示されます。 複数のファイルを選択するには、CommandキーまたはShiftキーを使用します。',
            folders: '<b>フォルダ:</b>サポートされていません; 多くのファイルをアップロードおよび管理するためのOSFプロジェクトを検討してください。',
            open1: '<b>ファイルを開く:</b>ファイル名をクリックすると、OSF内のファイルが表示されます。',
            open2: '<b>新規タブでファイルを開く:</b> command（WindowsではCtrl）を押し、ファイル名をクリックして新しいタブで開きます。',
            download: '<b>Zipとしてダウンロード:</b> ツールバーの[Zipとしてダウンロード]ボタンをクリックすると、すべてのファイルが.zipとしてダウンロードされます。',
        },
        delete_modal: {
            title: '"{{selectedItems.firstObject.itemName}}"を削除しますか?',
            title_multiple: '複数削除しますか？',
            body: 'この操作は不可逆的です',
        },
        conflict_modal: {
            title: '{{textValue}}という名前のアイテムは、この場所に既に存在します。',
            keep_info: '"両方を保持"は、両方のファイル（およびそのバージョン履歴）をこの場所に保持します。',
            replace_info: '"置換"は、この場所にある既存のファイルを上書きします。 上書きされたファイルの以前のバージョンは失われます。 移動したファイルの以前のバージョンを保持します。',
            keep_button: '両方を保持',
            replace_button: '置換',
        },
        move_modal: {
            title: 'プロジェクトへファイルを移動',
            move_button: 'ファイルを移動',
        },
    },
    dashboard: {
        page_title: 'ホーム',
        title: 'ダッシュボード',
        create_new_project_button: '新規プロジェクト作成',
        quicksearch: {
            search: 'マイプロジェクト内の検索',
            other_links: 'あなたの仕事を整理したり、OSFを<a href="/search/">検索</a>するには、<a href="/myprojects/">My Projects</a>に行きます。',
            no_results: 'プロジェクトが見つかりません！',
            no_projects: {
                line1: 'まだプロジェクトがありません。画面右上のボタンからプロジェクトを作成して下さい。',
                line2: 'この機能を使用すると、プロジェクトを検索してすばやくアクセスできます。',
                preview_alt: 'クイックプロジェクトの全画面プレビュー',
            },
            private_parent: '非公開プロジェクト / ',
            private_grandparent: '非公開プロジェクト / 非公開 / ',
        },
        noteworthy: {
            description: '公開プロジェクトの検索',
            new_and_noteworthy: '新着と注目',
            failed_noteworthy: '"新着と注目"プロジェクトのローディングに失敗しました。',
            most_popular: '最人気',
            failed_popular: '"最人気"プロジェクトのローディングに失敗しました。',
            search_more: '更にプロジェクトを探す',
            by: 'by',
        },
        meetings: {
            title: '学会や研究会をホスティングしますか？',
            description: 'OSF for Meetings サービスを使用し、学術集会への投稿するためのポータルを提供します。',
            button: '学術集会の表示',
        },
        preprints: {
            title: '最新の研究を閲覧',
            description: 'さまざまな研究分野をカバーするOSFで、ホストされている最新のプレプリントをご覧ください。',
            button: 'プレプリントの表示',
        },
    },
    new_project: {
        header: '新規プロジェクト作成',
        title_placeholder: 'プロジェクトタイトルの入力',
        more: 'More',
        affiliation: '所属',
        remove_all: '全件削除',
        select_all: '全件選択',
        no_matches: '一致しません',
        description_placeholder: 'プロジェクト説明の入力',
        template_title: 'テンプレート（オプション）',
        template_search_help: 'プロジェクトを検索するタイピングの開始。テンプレートとしてプロジェクトを選択すると、そのプロジェクトの内容をインポートせずにその構造が新しいプロジェクトに複製されます。',
        template_placeholder: 'テンプレートとして使用するプロジェクトを選択する',
        success_message: '新規プロジェクトの作成に成功しました',
        stay_here: 'この場に留まる',
        go_to_new: '作成したプロジェクトへ移動',
    },
    banners: {
        prereg: {
            description: 'あなたの次の研究を改善してください。 Prereg Challengeに参加すれば$ 1,000を獲得できます。',
            button: 'Prereg Challengeをはじめる',
        },
    },
    move_to_project: {
        create_new_project: '新規プロジェクトの作成',
        connect_to_existing: '既存のOSFプロジェクトへファイルを接続する',
        enter_project_title: 'プロジェクトタイトルの入力',
        new_project_message: 'ファイル用の新しいパブリックプロジェクトを作成することを選択しました。 プロジェクトがプライベートにならない限り、ユーザーは引き続きファイルにアクセスできます。',
        choose_project: 'プロジェクトを選択',
        project_select_message: '表示されるプロジェクトのリストは、書き込みアクセス権を持つプロジェクトとコンポーネントです。 登録はここには含まれていません。',
        no_projects_exist_error: '利用可能なプロジェクトはありません。 新しいプロジェクトを作成するには、元に戻ってください。',
        could_not_create_project: 'プロジェクトを作成できませんでした。 もう一度お試しください。',
        convert_or_copy_message: {
            project: '"ファイルの移動"をクリックすると、すぐにOSFプロジェクトが変更され、ファイルが移動されます。',
            component: '"ファイルの移動"をクリックすると、すぐにOSFコンポーネントが変更され、ファイルが移動されます。',
        },
        no_longer_public_warning: {
            project: '非公開プロジェクトに移動されたファイルは公開されなくなり、他のユーザーによって発見されなくなります。',
            component: 'プライベートコンポーネントに移動されたファイルは公開されなくなり、他のユーザーによって検出されなくなります。',
        },
        file_successfully_moved: 'ファイルは正常に移動されました！',
        could_not_move_file: 'ファイルを移動できませんでした。 もう一度お試しください',
        keep_working_here: 'ここで作業を続ける',
        go_to_new_project: '新規プロジェクトへ移動',
        go_to_component: 'コンポーネントへ移動',
        go_to_project: 'プロジェクトへ移動',
    },
    navbar: {
        add: '追加する',
        add_a_preprint: '{{preprintWords.preprint}}を追加',
        browse: '探す',
        cancel_search: '検索をキャンセル',
        donate: '寄付する',
        go_home: 'ホームへ行く',
        my_projects: 'マイプロジェクト',
        my_quick_files: 'マイクイックファイル',
        reviews: 'マイレビュー',
        search: '検索',
        search_help: '検索ヘルプ',
        search_the_OSF: 'OSF中を検索',
        send_search: '検索クエリの送信',
        support: 'サポート',
        toggle_primary: 'プライマリー・ナビゲーション切替',
        toggle_secondary: 'セカンダリー・ナビゲーション切替',
    },
    auth_dropdown: {
        log_out: 'ログアウト',
        my_profile: 'マイプロファイル',
        osf_support: 'OSFサポート',
        settings: '設定',
        sign_up: '新規登録',
        sign_in: 'ログイン',
        user_gravatar: 'ユーザーgravatar',
        toggle_auth_dropdown: 'authドロップダウンの切替',
    },
    search_help_modal: {
        close: '閉じる',
        search_help: 'ヘルプを検索',
        queries: 'クエリ',
        search_uses_the: '検索では',
        search_syntax: 'search syntax',
        help_description: 'これは多くのオプションを提供しますが、非常にシンプルにすることもできます。 有効な検索の例は次のとおりです。',
    },
    support: {
        title: 'サポート',
        faq_title: 'よくあるご質問',
        faq_paragraph: 'どうすれば無料になるのですか？ OSFは私の研究にどのように役立つでしょうか？ 登録とは何ですか？ Open Science Frameworkに関する質問は、',
        faq_link_text: 'FAQ.',
        faq_button: 'FAQへ',
        guides_title: 'OSFガイド',
        guides_paragraph_1: '研究ワークフローを改善するためにOSFを使用する方法を学びます。 私たちを読む',
        guides_link_text: 'ガイド',
        guides_paragraph_2: 'プロジェクトの構造、バージョン管理、プライバシー、ファイル、アドオンサポートなどの基本を示すステップバイステップのスクリーンショットがあります。',
        guides_button: 'ガイドを訪問',
        contact_title: '連絡する',
        contact_technical: 'テクニカルサポートの電子メール：',
        contact_questions: 'その他の質問やコメント',
        prereg_title: 'Prereg Challengeに関する質問はありますか？',
        prereg_paragraph_1: '調査して下さい、我々の',
        prereg_link_text: 'Preregセクション',
        prereg_paragraph_2: 'cos.io ウェブサイト上を',
        status_title: 'あなたは私たちのサービスでダウンタイムを経験していますか？',
        status_paragraph_1: '調査して下さい、我々の',
        status_link_text: 'ステータスページ',
        status_paragraph_2: '私たちのサービスがどのように動作しているかについての更新情報。',
        consultation_title: '統計コンサルティングをお探しですか',
        consultation_paragraph: 'COSは統計コンサルティングを提供します。 このサービスの詳細については、',
        consultation_link_text: 'COS統計コンサルティングページ。',
        social_title: '助けを得るための他の方法',
        social_twitter: 'Twitterで質問する',
        social_mailing: '我々のメーリングリストへ参加',
        social_facebook: 'Facebookでフォロー',
        social_github: 'GitHubのCOSとコンタクト',
    },
    not_found: {
        title: 'ぺーじが見つかりません',
        body: '要求されたリソースが見つかりませんでした。これが発生してはならず、問題が解決しない場合は、サポート<a href="mailto:{{supportEmail}}">{{supportEmail}}</a>へ報告してください',
    },
    zoom_to_guid: {
        title: 'このアプリ内のGUIDに直行する',
        zoom: '直行!',
        placeholder: 'GUIDを入力',
    },
    osf_mode_footer: {
        dev_mode: 'このサイトは開発モードで動作しています。',
    },
    footer: {
        status: 'Status',
        faq: 'FAQ/Guides',
        source_code: 'Source Code',
        rpp: 'Reproducibility Project: Psychology',
        rpcb: 'Reproducibility Project: Cancer Biology',
        top: 'TOP Guidelines',
        donate: 'Donate',
        socialize: 'Socialize',
        contact: 'Contact',
    },
    home: {
        title: 'Home',
        youtube_modal_title: 'Getting Started with the Open Science Framework',
        alert_logged_out: 'You have successfully logged out.',
        brand: 'Open Science Framework',
        tagline: 'A scholarly commons to connect the entire research cycle',
        youtube_label: 'OSF YouTube Video',
        osf_screenshot_alt: 'Screenshot of OSF',
        signup_title: 'Free and open source. Start now.',
        collaboration: 'Simplified Scholarly Collaboration',
        management: 'Cloud-based management for your projects.',
        structured_projects_title: 'Structured projects',
        structured_projects_paragraph: 'Keep all your files, data, and protocols in <strong>one centralized location.</strong> No more trawling emails to find files or scrambling to recover from lost data.',
        secure_cloud: 'Secure Cloud',
        control_access_title: 'Control access',
        control_access_paragraph: '<strong>You control which parts of your project are public or private</strong> making it easy to collaborate with the worldwide community or just your team.',
        control_access_span: 'Project-level Permissions',
        workflow_title: 'Respect for your workflow',
        workflow_paragraph: '<strong>Connect your favorite third party services</strong> directly to the Open Science Framework.',
        workflow_span: '3rd Party Integrations',
        student_main: '"The OSF is a great way to collaborate and stay organized while still using your favorite external services."',
        student_attrib: '<strong>Kara Woo</strong> - Information Manager, Aquatic Ecology, Washington State',
        integrations_title: 'OSF integrations make your <strong>workflow more efficient</strong>',
        integrations_alt_dropbox: 'Dropbox logo',
        integrations_alt_github: 'Github logo',
        integrations_alt_amazon: 'Amazon S3 logo',
        integrations_alt_box: 'Box logo',
        integrations_alt_google: 'Google Drive logo',
        integrations_alt_figshare: 'Figshare logo',
        integrations_alt_dataverse: 'Dataverse logo',
        integrations_alt_mendeley: 'Mendeley logo',
        features_title: '<strong>Everything</strong> your research needs to be a success',
        features_manage_title: 'Manage your project',
        features_manage_paragraph: 'View all of your projects from <strong>one dashboard.</strong>',
        features_share_title: 'Quickly share files',
        features_share_paragraph: '<strong>Share key project information</strong> and allow others to use and cite it.',
        features_changes_title: 'See project changes',
        features_changes_paragraph: 'See the latest project changes, who is contributing and <strong>historical file versions.</strong>',
        features_analytics_title: 'View project analytics',
        features_analytics_paragraph: 'Access <strong>project data</strong> ranging from visits over time to top referring websites.',
        features_archive_title: 'Archive your data',
        features_archive_paragraph: 'Computer or collaborator explode? With the OSF <strong>you will never lose your project data.</strong>',
        features_collaboration_title: 'Control access and collaboration',
        features_collaboration_paragraph: 'Add others to your projects to collaborate, or provide private access to view.',
        features_workflow_title: 'Supercharge your workflow',
        features_workflow_paragraph: 'The OSF helps individuals, teams and labs make their <strong>research processes more efficient.</strong>',
        features_registration_title: 'Registration',
        features_registration_paragraph: '<strong>Preserve the state of a project at important parts of its lifecycle</strong> such as the onset of data collection.',
        global_title: '<strong>Contribute</strong> to global scientific efforts',
        global_paragraph: 'Labs and teams across the globe use the Open Science Framework to open their projects up to the scientific community. You can browse the newest and most popular public projects',
        global_link: 'right here.',
        global_label: 'Get involved',
        non_profit_title: 'We are a <strong>mission-driven non-profit</strong>',
        non_profit_paragraph1: 'The OSF is a free, open source service of the',
        non_profit_link: 'Center for Open Science.',
        non_profit_paragraph2: 'We’re aligning scientific practices with scientific values by improving openness, integrity and reproducibility of research.',
        non_profit_label: 'Non-Profit',
        users_title: '<strong>Teachers, researchers, and global teams rely</strong> on the Open Science Framework',
        users_1_alt: 'Richard Ball',
        users_1_title: 'Making research reproducible &amp; verifiable',
        users_1_paragraph: 'The OSF helps our students understand and apply sound data management principles to their work. And since we have easy access to all of the files the students are working with, it greatly enhances our ability to offer them constructive guidance.',
        users_1_small: 'Richard Ball, Professor of Economics, Haverford College',
        users_2_title: 'Version control makes life easier',
        users_2_paragraph: 'The OSF makes version control effortless. My PI, my lab mates, and I have access to previous versions of a file at any time&#151;and the most current version is always readily available.',
        users_2_small: 'Erica Baranski, PhD Student, Social and Personality Psychology Funder Lab, UC Riverside',
        users_2_alt: 'Erica Baranski',
        users_3_alt: 'Anne Allison',
        users_3_title: 'A centralized hub of information',
        users_3_paragraph: 'The OSF creates a centralized hub of information where I can oversee a diversity of research projects across multiple classes. The centralization, organization and anywhere-access save me the time and energy necessary for managing these projects.',
        users_3_small: 'Anne Allison, Associate Professor of Biology at Piedmont Virginia Community College',
        free_title1: 'Free and open source.',
        free_title2: 'The OSF is a public good built to support your research.',
        free_link: 'Get started',
    },
    sign_up_form: {
        full_name: 'Full name',
        contact_email: 'Contact email',
        confirm_email: 'Confirm email',
        password: 'Password',
        sign_up_free: 'Sign up free',
        password_placeholder: 'Password (Must be {{min}} to {{max}} characters)',
        progress_1: 'Very weak',
        progress_2: 'Weak',
        progress_3: 'So-so',
        progress_4: 'Good',
        progress_5: 'Great!',
        registration_success: 'Registration successful. Please check {{email}} to confirm your email address.',
    },
    sign_up_policy: {
        paragraph: 'By clicking "Sign up free", you agree to our <a href="{{link1}}">Terms</a> and that you have read our <a href="{{link2}}">Privacy Policy</a>, including our information on <a href="{{link3}}">Cookie Use.</a>',
    },
    validationErrors: {
        description: 'This field',
        inclusion: '{{description}} is not included in the list',
        exclusion: '{{description}} is reserved',
        invalid: '{{description}} is invalid',
        confirmation: '{{description}} doesn\'t match {{on}}',
        accepted: '{{description}} must be accepted',
        empty: '{{description}} can\'t be empty',
        blank: '{{description}} can\'t be blank',
        present: '{{description}} must be blank',
        collection: '{{description}} must be a collection',
        singular: '{{description}} can\'t be a collection',
        tooLong: '{{description}} is too long (maximum is {{max}} characters)',
        tooShort: '{{description}} is too short (minimum is {{min}} characters)',
        before: '{{description}} must be before {{before}}',
        after: '{{description}} must be after {{after}}',
        wrongDateFormat: '{{description}} must be in the format of {{format}}',
        wrongLength: '{{description}} is the wrong length (should be {{is}} characters)',
        notANumber: '{{description}} must be a number',
        notAnInteger: '{{description}} must be an integer',
        greaterThan: '{{description}} must be greater than {{gt}}',
        greaterThanOrEqualTo: '{{description}} must be greater than or equal to {{gte}}',
        equalTo: '{{description}} must be equal to {{is}}',
        lessThan: '{{description}} must be less than {{lt}}',
        lessThanOrEqualTo: '{{description}} must be less than or equal to {{lte}}',
        otherThan: '{{description}} must be other than {{value}}',
        odd: '{{description}} must be odd',
        even: '{{description}} must be even',
        positive: '{{description}} must be positive',
        date: '{{description}} must be a valid date',
        onOrAfter: '{{description}} must be on or after {{onOrAfter}}',
        onOrBefore: '{{description}} must be on or before {{onOrBefore}}',
        email: '{{description}} must be a valid email address',
        phone: '{{description}} must be a valid phone number',
        url: '{{description}} must be a valid url',
        // custom
        email_match: 'Email addresses must match.',
        password_email: 'Your password cannot be the same as your email address.',
        password_old: 'Your new password cannot be the same as your old password.',
        password_match: 'Passwords must match.',
        recaptcha: 'Please complete reCAPTCHA',
    },
};
