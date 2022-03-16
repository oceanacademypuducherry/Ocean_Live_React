export const openSideNavbar = () => {
  let doc = document;
  const img = doc.querySelector(".sideNavbar > div:nth-child(1) > img");
  const routeContent = doc.querySelector(".sideNavbar > div:nth-child(2)");
  doc.querySelector(".sideNavbar").style.width = "230px";
  doc.querySelector(".sideNavbar").style.boxShadow =
    "2px 2px 20px 100000px rgba(0, 0, 0, 0.600)";

  doc.querySelector(".sideNavbar > div:nth-child(1) > img").style.visibility =
    "visible";

  //img animation
  img.style.width = "180px";
  // img.style.opacity = "1.0";

  // routeContent.style.visibility = "visible";
  routeContent.style.display = "block";
};

export const closeSideNavbar = () => {
  let doc = document;
  const routeContent = doc.querySelector(".sideNavbar > div:nth-child(2)");
  const img = doc.querySelector(".sideNavbar > div:nth-child(1) > img");
  doc.querySelector(".sideNavbar").style.width = "0px";
  doc.querySelector(".sideNavbar").style.boxShadow =
    "2px 2px 20px 0px rgba(0, 0, 0, 0)";
  img.style.visibility = "hidden";
  routeContent.style.display = "none";
};
