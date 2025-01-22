/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        navContainer: '1780px',
        container: '1140px',
      },
      fontFamily: {
        roboto: ['Roboto'],
        Darker: ['Darker Grotesque'],
      },
      backgroundImage: {
        bannerImage: "url('/src/assets/BannerBG.png')",
        bannerUI: "url('/src/assets/UIImage.png')",
        TrialCart: "url('/src/assets/CtaBG.png')",
        trialBg: "url('/src/assets/ctabg2.png')", 
        OfferBg: "url('/src/assets/popupBg.png')", 
      },
      colors: {
        red: '#FF6231',
        gray: '#888888',
      },
    },
  },
  plugins: [],
};

