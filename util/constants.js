const MESSAGES = {
    COMMANDS: {
        COURS: {
            ABSENCE: {
                name: 'absence',
                aliases: ['absence', 'abs'],
                category: 'cours',
                description: 'description blabla',
                usage: '<prefix> [groupe]',
                args: true
            },
            APPEL: {
                name: 'appel',
                aliases: ['appel'],
                category: 'cours',
                description: 'description blabla',
                usage: '',
                args: false
            },
            APPELFIN: {
                name: 'appelfin',
                aliases: ['appelfin'],
                category: 'cours',
                description: 'description blabla',
                usage: '',
                args: false
            },
            CHECK: {
                name: 'check',
                aliases: ['check'],
                category: 'cours',
                description: 'description blabla',
                usage: '',
                args: false
            },
            HISTORIQUE: {
                name: 'historique',
                aliases: ['historique'],
                category: 'cours',
                description: 'description blabla',
                usage: '',
                args: false
            },
        },
        MISC: {
            HELP: {
                name: 'help',
                aliases: ['help'],
                category: 'misc',
                description: 'description blabla',
                usage: '',
                args: false
            },
            PING: {
                name: 'ping',
                aliases: ['ping'],
                category: 'misc',
                description: 'description blabla',
                usage: '',
                args: false
            },
            TEST: {
                name: 'test',
                aliases: ['test'],
                category: 'misc',
                description: 'description blabla',
                usage: '',
                args: false
            }
        }
    }
}

exports.MESSAGES = MESSAGES;