/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      content:{
        "dottedcurve":"url('../images/curvedline.svg')"
      },
      colors:{
        "color-primary":"#01051e",
        "color-primary-light":"#020726",
        "color-primary-dark":"#010417",
        "color-secondary":"#ff7d3b",
        "color-gray":"#333",
        "color-white":"#fff",
        "color-blob":"#A427df"

      },
      container:{
        center:true,
        padding:{
          default:"20px",
          md:"50px"
        }
      },
      keyframes:{
        "moveup" : {
          "0%":{
              "margin-top": 40 ,
              opacity: "0",
          },
          "50%" :{
              "margin-top": 20,
              opacity: ".5",
          },
          "100%" : {
              "margin-top": 0,
              opacity: "1",
          }
          
        }
      },
      animation : {
        moveup:"moveup 5s ease-in-out"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],

}

