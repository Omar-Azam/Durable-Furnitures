let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let clickLight = document.querySelector(".click-light");
let clickDark = document.querySelector(".click-dark");
let dropDownLight = document.querySelector(".drop-down-light");
let dropDownDark = document.querySelector(".drop-down-dark");
let body = document.querySelector("body");
let lightSwitch = document.querySelector(".light");
let darkSwitch = document.querySelector(".dark");
let light = document.querySelector(".light-mode");
let dark = document.querySelector(".dark-mode");
let root = document.documentElement;
let darkModeTextColor = "#fff";
let lightModeTextColor = "#000000";
let darkModeBoxColor = "#2b2b2b";
let lightModeBoxColor = "#edecea";
let theme = "light";
let goToTop = document.querySelector(".go-top");
let popUp = document.querySelector(".product-description");
let box = document.querySelectorAll(".box");
let blurBackground = document.querySelector(".blur");
let closePopUp = document.querySelector(".close-icon");
let pType = document.querySelector("#p-type");
let pName = document.querySelector("#p-name");
let pPrice = document.querySelector("#p-price");
let pDescription = document.querySelector("#p-description");

let pData = [
  {
    pType: "Shop/Chairs Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Experience the epitome of comfort and style with this exquisitely crafted chair. Its curved backrest provides optimal support, while its sleek design adds a touch of sophistication to any interior. A perfect blend of form and function.",
  },
  {
    pType: "Shop/Chairs Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Create a serene retreat in your home with this plush and inviting armchair. Sink into its luxurious cushions and enjoy a moment of tranquility. Ideal for reading, watching TV, or simply unwinding after a long day.",
  },
  {
    pType: "Shop/Chairs Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Inject a burst of energy and personality into your space with this vibrant and eye-catching chair. Its bold pink hue is sure to make a statement and elevate the overall ambiance of any room.",
  },
  {
    pType: "Shop/Chairs Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Indulge in the ultimate in comfort and functionality with this modern and versatile chair. Its sleek design and smooth rotation make it perfect for entertaining, working, or simply relaxing. A must-have for those who appreciate both style and practicality.",
  },
  {
    pType: "Shop/Chairs Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Embrace the beauty of simplicity with this understated and elegant chair. Its clean lines and minimalist design create a sense of calm and tranquility. A perfect choice for those who appreciate a clutter-free aesthetic.",
  },
  {
    pType: "Shop/Chairs Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Add a touch of personality and flair to your space with this versatile accent chair. Whether used as a standalone piece or as part of a seating arrangement, it's sure to make a lasting impression.",
  },
  {
    pType: "Shop/Chairs Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Relive the golden age of design with this timeless and classic chair. Inspired by iconic mid-century aesthetics, it offers a blend of comfort and style that will never go out of fashion. A must-have for those who appreciate vintage charm.",
  },
  {
    pType: "Shop/Chairs Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Indulge in pure luxury with this exquisite chair upholstered in rich sapphire velvet. Its plush fabric and elegant design make it a centerpiece for any room. A perfect choice for those who appreciate the finer things in life.",
  },
  {
    pType: "Shop/Tables Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Create a warm and inviting dining space with this rustic and stylish table set. Crafted from natural wood, it features intricate weaves that add a unique touch of texture and character. Perfect for adding a touch of warmth and character to your home.",
  },
  {
    pType: "Shop/Tables Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "A versatile piece that can be used as a dining table, kitchen table, or workspace. Its rustic design adds a touch of natural beauty and creates a welcoming atmosphere. Ideal for those who appreciate the charm of handcrafted furniture.",
  },
  {
    pType: "Shop/Tables Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "A sleek and modern coffee table that adds a touch of sophistication to your living room. Its round shape is perfect for placing snacks, drinks, or books, while its sleek design complements any interior style.",
  },
  {
    pType: "Shop/Tables Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "A contemporary and stylish dining table that creates a sense of openness and light. The glass top adds a touch of elegance and makes the table appear larger than it is. Perfect for modern homes with a minimalist aesthetic.",
  },
  {
    pType: "Shop/Tables Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Elevate your dining room with this luxurious and glamorous dining set. The gold finish adds a touch of opulence and sophistication, while the comfortable chairs provide a relaxing dining experience. Perfect for those who appreciate fine craftsmanship and elegant design.",
  },
  {
    pType: "Shop/Tables Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "A space-saving dining table that's perfect for small apartments or dining areas. Its compact size doesn't compromise on style, as the glass top adds a touch of modern elegance. Ideal for those who want to maximize their space without sacrificing style.",
  },
  {
    pType: "Shop/Tables Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "A stylish and versatile dining set that adds a touch of sophistication to your home. The black and ivory color scheme creates a timeless and elegant look that complements any interior style. Perfect for those who appreciate a modern and refined aesthetic.",
  },
  {
    pType: "Shop/Tables Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Create a serene and peaceful dining space with this calming and relaxing table set. The white finish adds a touch of purity and tranquility, while the comfortable chairs provide a comfortable dining experience. Perfect for those who want to escape the hustle and bustle and enjoy a moment of peace.",
  },
  {
    pType: "Shop/Sofas Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Indulge in the ultimate in comfort and sophistication with this exquisitely curved couch. Its plush cushions and elegant design create a focal point in any living room, while its curved shape adds a touch of modern flair. Perfect for those who appreciate the finer things in life.",
  },
  {
    pType: "Shop/Sofas Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Timeless elegance meets modern comfort in this classic leather sofa. Crafted from premium leather, it offers durability, luxury, and a timeless appeal. A versatile piece that complements any interior style, from traditional to contemporary.",
  },
  {
    pType: "Shop/Sofas Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Bring a warm and inviting atmosphere to your living room with this amber-hued sofa. Its soft fabric and comfortable design make it perfect for relaxing and entertaining guests. The amber color adds a touch of warmth and vibrancy to any space.",
  },
  {
    pType: "Shop/Sofas Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "A modern and minimalist sofa that adds a touch of sophistication to your space. Its clean lines and plush cushions provide both style and comfort, making it perfect for contemporary homes. The perfect balance of form and function.",
  },
  {
    pType: "Shop/Sofas Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "A versatile and stylish couch that adds a touch of sophistication to your living room. Its charcoal color complements a variety of interior styles, while its leather upholstery offers durability and a luxurious feel. Perfect for those who appreciate a timeless and elegant aesthetic.",
  },
  {
    pType: "Shop/Sofas Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Add a pop of color and opulence to your space with this emerald velvet sofa. Its luxurious fabric and plush cushions create a sophisticated and inviting atmosphere. The emerald color adds a touch of drama and elegance to any room.",
  },
  {
    pType: "Shop/Sofas Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Create a serene and calming ambiance with this lavender-hued sofa. Its soft fabric and comfortable design make it perfect for relaxing and unwinding. The lavender color adds a touch of tranquility and peace to any space.",
  },
  {
    pType: "Shop/Sofas Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Bring a touch of coastal charm to your home with this relaxed and inviting sofa. Its neutral color palette and comfortable design create a peaceful and inviting atmosphere. Perfect for those who appreciate a casual and laid-back style.",
  },
  {
    pType: "Shop/Beds Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Experience ultimate comfort and tranquility with these twin beds, designed with soft, plush materials for a restful sleep. The perfect choice for creating a serene and relaxing bedroom environment.",
  },
  {
    pType: "Shop/Beds Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Timeless elegance meets modern comfort in these classic twin beds. Crafted with a blend of traditional and contemporary design elements, they offer a touch of sophistication to any bedroom.",
  },
  {
    pType: "Shop/Beds Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Bring a touch of nature into your bedroom with these tropical wooden twin beds. The natural wood finish adds warmth and character, while the sturdy construction ensures durability and long-lasting comfort.",
  },
  {
    pType: "Shop/Beds Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Indulge in cloud-like comfort with these twin beds, featuring plush mattresses and soft, breathable fabrics. The perfect choice for a restful and rejuvenating sleep.",
  },
  {
    pType: "Shop/Beds Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Embrace the beauty of natural wood with these twin beds, crafted from high-quality timber. The natural finish adds warmth and character, while the sturdy construction ensures durability and long-lasting comfort.",
  },
  {
    pType: "Shop/Beds Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Create a modern and stylish bedroom with these twin beds, featuring a sleek and contemporary design. The comfortable mattresses and plush pillows provide a restful and rejuvenating sleep.",
  },
  {
    pType: "Shop/Beds Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Escape to your own personal retreat with these twin beds, designed to provide ultimate comfort and relaxation. The plush mattresses and soft fabrics create a serene and peaceful sleeping environment.",
  },
  {
    pType: "Shop/Beds Collection",
    pName: "",
    pPrice: "$",
    pDescription:
      "Create a peaceful oasis in your bedroom with these twin beds, featuring a calming and tranquil design. The soft fabrics and comfortable mattresses provide a restful and rejuvenating sleep.",
  },
  {
    pType: "Shop/New Arrivals",
    pName: "",
    pPrice: "$",
    pDescription:
      "Elevate your dining experience with the Classic Counter Stool, a timeless piece that perfectly blends style and functionality. This stool features a pristine white finish, making it a versatile addition to any kitchen or bar area.",
  },
  {
    pType: "Shop/New Arrivals",
    pName: "",
    pPrice: "$",
    pDescription:
      "Introducing the Modern Dining Chairs, a vibrant collection designed to brighten your dining space. Available in eye-catching colors like red, yellow, and green, these chairs add a playful touch to any table setting.",
  },
  {
    pType: "Shop/New Arrivals",
    pName: "",
    pPrice: "$",
    pDescription:
      "Indulge in comfort with the Side Velvet Coffee Chair, designed to bring a touch of luxury to your living space. Upholstered in soft gray velvet, this chair offers a plush seating experience that invites you to relax and unwind.",
  },
  {
    pType: "Shop/New Arrivals",
    pName: "",
    pPrice: "$",
    pDescription:
      "Experience the modern elegance of the White Glossy Chair, a stunning piece that enhances any space. Its glossy finish reflects light beautifully, creating an open and airy feel.",
  },
  {
    pType: "Shop/New Arrivals",
    pName: "",
    pPrice: "$",
    pDescription:
      "Indulge in the cozy comfort of the Red Fabric Soft Chair, designed to be the centerpiece of relaxation. The vibrant red upholstery adds a pop of color to your space, inviting warmth and energy.",
  },
  {
    pType: "Shop/New Arrivals",
    pName: "",
    pPrice: "$",
    pDescription:
      "Bring a touch of whimsy to your home with the Round Timber Swing, a unique seating option that adds fun to any space. Crafted from high-quality timber, this swing offers a rustic charm and durability that stands the test of time.",
  },
  {
    pType: "Shop/New Arrivals",
    pName: "",
    pPrice: "$",
    pDescription:
      "Experience ultimate relaxation with the Slumber Nightfall Sofa, a luxurious seating option designed for comfort and style. Upholstered in soft, inviting fabric, this sofa invites you to sink into its plush cushions after a long day.",
  },
  {
    pType: "Shop/New Arrivals",
    pName: "",
    pPrice: "$",
    pDescription:
      "Embrace the serene elegance of the White Snowy Bliss Couch, designed to bring a fresh and airy feel to your living space. This stunning couch features a soft white upholstery that mimics the softness of fresh snow, creating a calming ambiance.",
  },
  {
    pType: "Shop/Trending Now",
    pName: "",
    pPrice: "$",
    pDescription:
      "Immerse yourself in nature with the Botanical Bliss Chairs, designed to bring the beauty of the outdoors inside. Upholstered in vibrant, botanical-themed fabric, these chairs create a refreshing atmosphere.",
  },
  {
    pType: "Shop/Trending Now",
    pName: "",
    pPrice: "$",
    pDescription:
      "Experience unparalleled comfort with the Modern Tranquility Lounge, a flat floor sofa designed for ultimate relaxation. Its sleek and contemporary design seamlessly blends with various decor styles, making it a versatile choice.",
  },
  {
    pType: "Shop/Trending Now",
    pName: "",
    pPrice: "$",
    pDescription:
      "Add a touch of sophistication to your decor with the Elegant Vase Shelf, a stunning display piece for your favorite floral arrangements. Crafted from high-quality materials, this shelf features a sleek design that complements any interior style.",
  },
  {
    pType: "Shop/Trending Now",
    pName: "",
    pPrice: "$",
    pDescription:
      "Indulge in relaxation with the Cozy Garden Swing, a charming addition to your outdoor space. This beautifully designed swing features comfortable seating that invites you to unwind in the fresh air.",
  },
  {
    pType: "Shop/Trending Now",
    pName: "",
    pPrice: "$",
    pDescription:
      "Embrace timeless elegance with the Vintage White Side Table, a charming piece that adds character to any space. Crafted from high-quality materials, this side table features a classic design with intricate detailing.",
  },
  {
    pType: "Shop/Trending Now",
    pName: "",
    pPrice: "$",
    pDescription:
      "Bring the calmness of the coast to your backyard with the Seaside Serenity Swing, designed for relaxation and enjoyment. Its stylish design and comfortable seating make it perfect for lazy afternoons outdoors.",
  },
  {
    pType: "Shop/Trending Now",
    pName: "",
    pPrice: "$",
    pDescription:
      "Elevate your living space with the Urban Coffee Table, a sleek and stylish centerpiece for your home. Crafted from high-quality materials, this table boasts a contemporary design that fits seamlessly into modern decor.",
  },
  {
    pType: "Shop/Trending Now",
    pName: "",
    pPrice: "$",
    pDescription:
      "Indulge in luxury with the Royal Breeze Sofa, a stunning centerpiece that brings elegance to any living space. Upholstered in rich fabrics, this sofa exudes sophistication while providing ultimate comfort.",
  },
  {
    pType: "Shop/Recent Products",
    pName: "",
    pPrice: "$",
    pDescription:
      "Experience the joy of outdoor relaxation with the Wooden Eggchair Swing, a delightful addition to any garden or patio. This beautifully crafted swing features a cozy, egg-shaped design that cradles you in comfort as you sway gently.",
  },
  {
    pType: "Shop/Recent Products",
    pName: "",
    pPrice: "$",
    pDescription:
      "Transform your balcony into a cozy retreat with the Modern Balcony Cloth Swing, designed for comfort and style. Crafted from soft, durable fabric, this swing invites you to relax and enjoy your surroundings.",
  },
  {
    pType: "Shop/Recent Products",
    pName: "",
    pPrice: "$",
    pDescription:
      "Add a touch of elegance to your dining area with the Round Beige Table Set, perfect for intimate gatherings or family meals. Featuring a sleek design, this set includes a beautifully crafted round table and coordinating chairs.",
  },
  {
    pType: "Shop/Recent Products",
    pName: "",
    pPrice: "$",
    pDescription:
      "Bring charm to your dining area with the Rustic Metal Short Dining Set, designed for those who appreciate industrial style. This unique set features a sturdy metal frame paired with wooden accents, creating a warm and inviting atmosphere.",
  },
  {
    pType: "Shop/Recent Products",
    pName: "",
    pPrice: "$",
    pDescription:
      "Brighten your living space with the Yellow Fancy Sofa Set, a bold statement piece that exudes warmth and vibrancy. Upholstered in luxurious fabric, this set provides both comfort and style, making it perfect for entertaining guests or lounging at home.",
  },
  {
    pType: "Shop/Recent Products",
    pName: "",
    pPrice: "$",
    pDescription:
      "Enhance your decor with the Scarlet Oak Stool, a striking piece that combines functionality and beauty. Crafted from premium oak, this stool features a rich scarlet finish that adds a splash of color to any room.",
  },
  {
    pType: "Shop/Recent Products",
    pName: "",
    pPrice: "$",
    pDescription:
      "Indulge in luxury with the Lavish Crescent Swing, a stunning piece that transforms your outdoor space into a private retreat. Its unique crescent shape cradles you in comfort, inviting relaxation and tranquility.",
  },
  {
    pType: "Shop/Recent Products",
    pName: "",
    pPrice: "$",
    pDescription:
      "Make a bold statement with the Red Metallic Couch, a striking centerpiece that brings energy to your living space. Upholstered in vibrant red fabric with a metallic sheen, this couch is perfect for modern and eclectic decor.",
  },
  {
    pType: "Shop/Popular Picks",
    pName: "",
    pPrice: "$",
    pDescription:
      "Introduce elegance to your dining area with the Pearl Round Table Set, designed for sophistication and style. Featuring a smooth, glossy finish, this table set radiates a timeless beauty that complements any decor.",
  },
  {
    pType: "Shop/Popular Picks",
    pName: "",
    pPrice: "$",
    pDescription:
      "Add a playful twist to your decor with the Chalkboard Side Table Set, perfect for those who love creativity. These tables feature a unique chalkboard surface, allowing you to personalize your space with doodles or messages.",
  },
  {
    pType: "Shop/Popular Picks",
    pName: "",
    pPrice: "$",
    pDescription:
      "Experience modern elegance with the Midnight Loop Chair, a stylish addition to any contemporary space. Its sleek design features a unique looped structure, offering both comfort and visual appeal.",
  },
  {
    pType: "Shop/Popular Picks",
    pName: "",
    pPrice: "$",
    pDescription:
      "Bring warmth and charm to your dining area with the Round Wooden Table Set, a perfect choice for family meals and gatherings. Crafted from solid wood, this set showcases a beautiful natural finish that enhances the grain's beauty.",
  },
  {
    pType: "Shop/Popular Picks",
    pName: "",
    pPrice: "$",
    pDescription:
      "Discover the perfect blend of style and relaxation with the Black Metal Eggchair Swing, a chic addition to any outdoor space. Crafted from sturdy metal, this swing features a sleek design that complements modern decor.",
  },
  {
    pType: "Shop/Popular Picks",
    pName: "",
    pPrice: "$",
    pDescription:
      "Add a touch of nostalgia to your home with the Vintage Bar Stool, a classic piece that brings character to any space. Crafted from high-quality materials, this stool features a timeless design with intricate detailing.",
  },
  {
    pType: "Shop/Popular Picks",
    pName: "",
    pPrice: "$",
    pDescription:
      "Experience the charm of Parisian dining with the French Elegance Table Set, designed for those who appreciate fine craftsmanship. This exquisite set features a beautifully crafted table paired with elegantly designed chairs, all showcasing intricate detailing.",
  },
  {
    pType: "Shop/Popular Picks",
    pName: "",
    pPrice: "$",
    pDescription:
      "Embrace eco-friendly design with the Harmony Bamboo Sofa, a stunning piece that combines sustainability and style. Crafted from renewable bamboo, this sofa features a sleek and modern design that enhances any space.",
  },
];

const pNameVal = document.querySelectorAll(".title-price h3");
const pNameValArr = Array.from(pNameVal).map((val) => val.innerText);

const pPriceVal = document.querySelectorAll(".price-box .final-price");
const pPriceValArr = Array.from(pPriceVal).map((val) => val.innerText);

for (let i = 0; i < pData.length; i++) {
  pData[i].pName = pNameValArr[i];
  pData[i].pPrice = pPriceValArr[i];
  console.log(i);
}

Array.from(box).forEach((boxs) => {
  boxs.addEventListener("click", (evt) => {
    let title = boxs.querySelector(".title-price h3").innerText;
    let picture = boxs.querySelector(".box-img img").getAttribute("src");
    let image = document.querySelector(".img-box");
    let i = 0;
    let val;
    for (i = 0; i < pData.length; i++) {
      if (title == pData[i].pName) {
        val = i;
      }
    }
    if (title == pData[val].pName) {
      pType.innerText = pData[val].pType;
      pName.innerText = pData[val].pName;
      pPrice.innerText = pData[val].pPrice;
      pDescription.innerText = pData[val].pDescription;
      image.style.backgroundImage = `url('${picture}')`;
      blurBackground.classList.remove("hide");
      popUp.classList.remove("hide");
    }
  });
});

let pQuantity = 1;
document.querySelector("#add-cart").addEventListener("click", (evt) => {
  if (pQuantity > 10) {
    document.querySelector("#p-quantity").value = 10;
    pQuantity = 10;
  } else {
    document.querySelector("#p-quantity").value = pQuantity;
    pQuantity++;
  }
});

closePopUp.addEventListener("click", (evt) => {
  blurBackground.classList.add("hide");
  popUp.classList.add("hide");
  document.querySelector("#p-quantity").value = 0;
  pQuantity = 1;
});

blurBackground.addEventListener("click", (evt) => {
  blurBackground.classList.add("hide");
  popUp.classList.add("hide");
  document.querySelector("#p-quantity").value = 0;
  pQuantity = 1;
});

menu.onclick = () => {
  navbar.classList.toggle("active");
  dropDownDark.classList.add("hide");
  dropDownLight.classList.add("hide");
};
document.querySelector(".home").onclick = () => {
  dropDownLight.classList.add("hide");
  dropDownDark.classList.add("hide");
  navbar.classList.remove("active");
};
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    goToTop.classList.add("active-top");
    navbar.classList.remove("active");
    dropDownDark.classList.add("hide");
    dropDownLight.classList.add("hide");
  } else {
    goToTop.classList.remove("active-top");
  }
});

clickLight.addEventListener("click", (evt) => {
  dropDownLight.classList.toggle("hide");
});

darkSwitch.addEventListener("click", (evt) => {
  root.style.setProperty("--text-color", darkModeTextColor);
  root.style.setProperty("--box-color", darkModeBoxColor);
  body.classList.add("dark-theme");
  document.querySelector("header").style.backgroundColor = "#2b2b2b";
  document.querySelector(".brands-container").classList.toggle("brand-remove");
  theme = "dark";
  if (theme == "dark") {
    light.classList.add("hide");
    dark.classList.remove("hide");
    document.querySelector(".home").classList.remove("light-home");
    document.querySelector(".home").classList.add("dark-home");
    theme = "light";
    navbar.classList.remove("active");
  }
});

clickDark.addEventListener("click", (evt) => {
  dropDownDark.classList.toggle("hide");
});

lightSwitch.addEventListener("click", (evt) => {
  root.style.setProperty("--text-color", lightModeTextColor);
  root.style.setProperty("--box-color", lightModeBoxColor);
  body.classList.remove("dark-theme");
  document.querySelector("header").style.backgroundColor = "#edecea";
  document.querySelector(".brands-container").classList.toggle("brand-remove");
  if (theme == "light") {
    light.classList.remove("hide");
    dark.classList.add("hide");
    document.querySelector(".home").classList.remove("dark-home");
    document.querySelector(".home").classList.add("light-home");
    theme = "dark";
    navbar.classList.remove("active");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("go-up");
    } else {
      // entry.target.classList.remove("go-up");
    }
  });
});

box.forEach((el) => observer.observe(el));

let pair1 = document.querySelector("#chair");
let pair2 = document.querySelector("#table");
let pair3 = document.querySelector("#sofa");
let pair4 = document.querySelector("#bed");
let pair5 = document.querySelector("#new");
let pair6 = document.querySelector("#trending");
let pair7 = document.querySelector("#recent");
let pair8 = document.querySelector("#popular");
let navBtn = document.querySelectorAll(".navigation-btn button");

Array.from(navBtn).forEach((button) => {
  button.addEventListener("click", (evt) => {
    if (evt.target.innerText == "Explore Collections") {
      pair1.classList.remove("hide");
      pair2.classList.remove("hide");
      pair3.classList.remove("hide");
      pair4.classList.remove("hide");
      pair5.classList.add("hide");
      pair6.classList.add("hide");
      pair7.classList.add("hide");
      pair8.classList.add("hide");
      document.querySelector(".next").classList.toggle("navigation-btn-change");
      document.querySelector(".prev").classList.toggle("navigation-btn-change");
      document.querySelector(".home-text a").setAttribute("href", "#chair");
      document.querySelector(".products a").setAttribute("href", "#chair");
    } else if (evt.target.innerText == "Discover What's New") {
      pair1.classList.add("hide");
      pair2.classList.add("hide");
      pair3.classList.add("hide");
      pair4.classList.add("hide");
      pair5.classList.remove("hide");
      pair6.classList.remove("hide");
      pair7.classList.remove("hide");
      pair8.classList.remove("hide");
      document.querySelector(".next").classList.toggle("navigation-btn-change");
      document.querySelector(".prev").classList.toggle("navigation-btn-change");
      document.querySelector(".home-text a").setAttribute("href", "#new");
      document.querySelector(".products a").setAttribute("href", "#new");
    }
  });
});
