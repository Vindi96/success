module.exports = {
    purge: {
        //enabled: true,
        content: [
            "./templates/**/*.ss",
            "./client/js/**/*.js"
        ],
    },
    theme: {
        extend: {
            screens: {
                'mobile': {'max': '374px'},
                sm: '480px',
                xsm: '548px',
                mdDown: {'max': '767px'},
                md: '768px',
                lg: '1024px',
                xl: '1200px',
                xxl: '1638px',
            },
            colors: {
                'secondary-200': '#B0E0E6',
                'primary-500': '#0061FE',
                'primary-700': '#1352E5',
                'secondary-900': '#004c4c', 
                'secondary-50': '#FCFBF2',
                'secondary-500': '#008080',
                'secondary-600': '#66b2b2',
                'secondary-800': '#006666',
                'gray-50': '#FAFAFA',
                'gray-100': '#F5F5F5',
                'gray-300': '#E0E0E0',
                'gray-500': '#707375',
                'gray-800': '#424242',
                'gray-600': '#757575',
                'error-50': '#fbe0e0',
                error: '#E12222',
            },
            fontFamily: {
                'copy': ['fraunces', 'sans-serif'],
                'body': ['moniker', 'sans-serif']
            },
            spacing: {
                // '17': '4.125rem',
                '11': '44px',
                '13': '52px',
                '15': '60px',
                '22': '88px',
                '24': '96px',
                '30': '120px',
                '31': '124px',
            },
            fontSize: {
                'xl': ['62px', 1.16],
                'h1': ['32px', 1.25],
                'h2': ['24px', 1.33],
                'h3': ['20px', 1.4],
                'h4': ['18px', 1.44],
                'h5': ['16px', 1.5],
                'sp': ['32px', 1.5],
                'sm': ['16px', 1],
                'xsm': ['14px', 1.57],
            }
        },
    },
    plugins: [
        require('@mertasan/tailwindcss-variables')
    ]
}
