import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  const includeCover = document.querySelector(".includeCover");
  const name = document.querySelector(".name");
  const lastName = document.querySelector(".lastName");
  const smPosition = document.querySelector(".smPosition");
  const twitter = document.querySelector(".twitter");
  const github = document.querySelector(".github");
  const linkedin = document.querySelector(".linkedin");
  const instagram = document.querySelector(".instagram");
  const role = document.querySelector(".role");
  const city = document.querySelector(".city");
  const country = document.querySelector(".country");

  const handleSMPosition = event => {
    if (smPosition.value === "Left") {
      smPosition.classList.add("position-left");
      smPosition.classList.remove("position-right");
    } else {
      smPosition.classList.add("position-right");
      smPosition.classList.remove("position-left");
    }
  };
  smPosition.addEventListener("change", handleSMPosition);

  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${name.value || "Your name"} ${lastName.value ||
    "Your last name"}</h1>
          <h2>${role.value || "Your role"}</h2>
          <h3>${city.value || "Your city"}, ${country.value ||
    "Your country"}</h3>
          <ul class=${smPosition.value}>
            <li><a href=${twitter.value}><i class="fab fa-twitter"></i></a></li>
            <li><a href=${github.value}><i class="fab fa-github"></i></a></li>
            <li><a href=${
              linkedin.value
            }><i class="fab fa-linkedin"></i></a></li>
            <li><a href=${
              instagram.value
            }><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
