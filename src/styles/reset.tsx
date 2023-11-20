import { Global, css } from "@emotion/react";

const ResetStyle = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Noto+Sans+KR:wght@300;400;500;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Gaegu:wght@700&family=Nanum+Pen+Script&family=Noto+Sans+KR:wght@300;400;500;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Gaegu:wght@700&family=Nanum+Pen+Script&family=Noto+Sans+KR:wght@300;400;500;700&family=Stylish&display=swap");
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        @font-face {
          font-family: "GmarketSansMedium";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
            format("woff");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
<<<<<<< HEAD
          font-family: "GmarketSansMedium";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
            format("woff");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "EASTARJET-Medium";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/EASTARJET-Medium.woff2")
            format("woff2");
          font-weight: 500;
          font-style: normal;
        }
        @font-face {
          font-family: "DNFBitBitv2";
          font-style: normal;
          font-weight: 400;
          src: url("//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf")
            format("opentype");
        }
        @font-face {
          font-family: "TheJamsil5Bold";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2")
            format("woff2");
          font-weight: 700;
          font-style: normal;
        }
        @font-face {
          font-family: "TTWanjudaedunsancheB";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/TTWanjudaedunsancheB.woff2")
            format("woff2");
          font-weight: 700;
          font-style: normal;
        }
        @font-face {
          font-family: "SUITE-Regular";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2")
            format("woff2");
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: "KOTRAHOPE";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2")
=======
          font-family: "iceSotong-Rg";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/iceSotong-Rg.woff2")
>>>>>>> 55e76475f43701eae86363d5e33ac3a390c0b4c6
            format("woff2");
          font-weight: normal;
          font-style: normal;
        }
<<<<<<< HEAD
        @font-face {
          font-family: "Cafe24Ssurround";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff")
            format("woff");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "NanumSquareNeo-Variable";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2")
            format("woff2");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "HakgyoansimWoojuR";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimWoojuR.woff2")
            format("woff2");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "yg-jalnan";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff")
            format("woff");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "NPSfontBold";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/NPSfontBold.woff2")
            format("woff2");
          font-weight: 700;
          font-style: normal;
        }
        @font-face {
          font-family: "JalnanGothic";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/JalnanGothic.woff")
            format("woff");
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: "SBAggroB";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff")
            format("woff");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "Jeongnimsaji-R";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/Jeongnimsaji-R.woff2")
            format("woff2");
          font-weight: 400;
          font-style: normal;
        }
=======
>>>>>>> 55e76475f43701eae86363d5e33ac3a390c0b4c6
      `}
    />
  );
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Noto+Sans+KR:wght@300;400;500;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Gaegu:wght@700&family=Nanum+Pen+Script&family=Noto+Sans+KR:wght@300;400;500;700&display=swap");
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        @font-face {
          font-family: "GmarketSansMedium";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
            format("woff");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "EASTARJET-Medium";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/EASTARJET-Medium.woff2")
            format("woff2");
          font-weight: 500;
          font-style: normal;
        }
        @font-face {
          font-family: "DNFBitBitv2";
          font-style: normal;
          font-weight: 400;
          src: url("//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf")
            format("opentype");
        }
        @font-face {
          font-family: "TheJamsil5Bold";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2")
            format("woff2");
          font-weight: 700;
          font-style: normal;
        }
        @font-face {
          font-family: "TTWanjudaedunsancheB";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/TTWanjudaedunsancheB.woff2")
            format("woff2");
          font-weight: 700;
          font-style: normal;
        }
        @font-face {
          font-family: "SUITE-Regular";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2")
            format("woff2");
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: "KOTRAHOPE";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2")
            format("woff2");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "Cafe24Ssurround";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff")
            format("woff");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "NanumSquareNeo-Variable";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2")
            format("woff2");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "HakgyoansimWoojuR";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimWoojuR.woff2")
            format("woff2");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "yg-jalnan";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff")
            format("woff");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "NPSfontBold";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/NPSfontBold.woff2")
            format("woff2");
          font-weight: 700;
          font-style: normal;
        }
        @font-face {
          font-family: "JalnanGothic";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/JalnanGothic.woff")
            format("woff");
          font-weight: normal;
          font-style: normal;
        }
      `}
    />
  );
};

export default ResetStyle;
