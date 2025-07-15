// Tailwind CSS カスタム設定
// HTMLファイルのheadセクションで読み込んで使用

const stellarTailwindConfig = {
  theme: {
    extend: {
      // カスタムカラーパレット
      colors: {
        'stellar-primary': '#2563eb',     // メインブルー
        'stellar-secondary': '#7c3aed',   // パープル
        'stellar-accent': '#06b6d4',      // シアン
        'stellar-dark': '#1a202c',        // ダークネイビー
        'stellar-gray': {
          50: '#f7fafc',
          100: '#edf2f7',
          200: '#e2e8f0',
          300: '#cbd5e0',
          400: '#a0aec0',
          500: '#718096',
          600: '#4a5568',
          700: '#2d3748',
          800: '#1a202c',
          900: '#171923',
        }
      },
      
      // カスタムフォントファミリー
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans JP', 'sans-serif'],
      },
      
      // カスタムスペーシング
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
      },
      
      // カスタムブレークポイント（必要に応じて）
      screens: {
        'xs': '480px',
      },
      
      // カスタムアニメーション
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideInRight 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      // カスタムシャドウ
      boxShadow: {
        'stellar': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'stellar-lg': '0 20px 35px -10px rgba(0, 0, 0, 0.15), 0 10px 15px -5px rgba(0, 0, 0, 0.05)',
      },
      
      // カスタムボーダー半径
      borderRadius: {
        'stellar': '0.5rem',
      },
      
      // カスタムz-index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  
  // プラグイン設定（CDN版では使用できないが、参考として記載）
  plugins: [],
}

// グローバルに設定を適用
if (typeof tailwind !== 'undefined') {
  tailwind.config = stellarTailwindConfig;
}