// sort btns
let sortby_btn = document.getElementById('sortby_btn');
let sortby_opt = document.getElementsByClassName('sortby-opt')[0];

// logo
let Logo_icon = document.getElementsByClassName('Logo-icon')[0];

Logo_icon.addEventListener('click', () => {
  window.location.href = 'index.html';
})

const urlParams = new URLSearchParams(window.location.search);
const searchValue = urlParams.get('searchValue');

sortby_btn.addEventListener("click", () => {
  sortby_opt.classList.toggle('sortby-opt_active')
})

let url = "./js/dataacc.json"
// btns sort
let btn_Newest = document.getElementById('btn_newest');
let btn_All = document.getElementById('btn_all');
let btn_low = document.getElementById('btn_low');
let btn_hight = document.getElementById('btn_hight');
let btn_search = document.getElementById('btn_search');

// // btns list 
let btn_baomat = document.getElementById('btn-baomat')
let btn_hoctap = document.getElementById('btn-hoctap')
let btn_giaitri = document.getElementById('btn-giaitri')
let btn_lamviec = document.getElementById('btn-lamviec')
let btn_keykichhoat = document.getElementById('btn-keykichhoat')
let btn_nangcap = document.getElementById('btn-nangcap')
let btn_suckhoe = document.getElementById('btn-suckhoe')
let btn_taikhoang = document.getElementById('btn-taikhoang')

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function createInnerCart(el) {
  const { Img, Name, Price1, MRP1, Tag, link } = el;
  let card = document.createElement('a');
  card.classList.add('card')
  card.innerHTML = `<img src="${Img}" />
  <div class="card-content">
    <h5 class="card-title">${Name}</h5>
    <div class="color_tag">
      <h6>${Tag}</h6>
      <h6><i class="fa-solid fa-tag"> </i></h6>
    </div>
    <div class="price">
      <div class="price-item">
        <h5>${formatNumberWithCommas(Price1)}đ</h5>
        <h5>
          <del>${formatNumberWithCommas(MRP1)}đ</del>
        </h5>
      </div>
    </div>

  </div>`
  console.log(link)
  card.href = link;
  return card;
}

let main_accout_bx = document.getElementsByClassName('main-accout-bx')[0];


fetch(url)
  .then((Response => Response.json()))
  .then((data) => {
    const all_item_array = data;
    const low_array = [...data];
    const hight_array = [...data];
    const newset_array = [...data];
    const isIndexPage = window.location.pathname.includes("index.html");

    const adobeItems = all_item_array.filter(item => item.Category === "Adobe");
    const mỉcrosoftItems = all_item_array.filter(item => item.Category === "Microsoft");
    const googleItems = all_item_array.filter(item => item.Category === "Google");
    const netflixItems = all_item_array.filter(item => item.Category === "Netflix");
    const canvasItems = all_item_array.filter(item => item.Category === "Canvas");
    const antiVirusItems = all_item_array.filter(item => item.Category === "Anti Virus");
    const vpnsItems = all_item_array.filter(item => item.Category === "Vpns");
    const spotifyItems = all_item_array.filter(item => item.Category === "Spotify");
    const dropboxItems = all_item_array.filter(item => item.Category === "Dropbox");

    const isAdobePage = window.location.pathname.includes("adobe.html");
    const isGooglePage = window.location.pathname.includes("google.html");
    const isCanvasPage = window.location.pathname.includes("canvas.html");
    const isMỉcrosoftPage = window.location.pathname.includes("microsoft.html");
    const isNetflixPage = window.location.pathname.includes("netflix.html");
    const isSpotifyPage = window.location.pathname.includes("spotify.html");
    const isAntiVirusPage = window.location.pathname.includes("antivirus.html");
    const isVpnsPage = window.location.pathname.includes("vpns.html");
    const isDropboxPage = window.location.pathname.includes("dropbox.html");

    if (isIndexPage) {
      console.log("Bạn không ở trang adobe.html");
      main_accout_bx.innerHTML = '';
      data.forEach((el, i) => {
        main_accout_bx.appendChild(createInnerCart(el));
      });
      if (searchValue != null) {
        main_accout_bx.innerHTML = '';
        all_item_array.forEach((el, i) => {
          if (el.Name.toUpperCase().includes(searchValue.toUpperCase())) {
            main_accout_bx.appendChild(createInnerCart(el));
          }

        });
      }
    } else {

      if (isAdobePage) {
        console.log("Bạn đang ở trang adobe.html");
        main_accout_bx.innerHTML = '';
        adobeItems.forEach((el, i) => {
          main_accout_bx.appendChild(createInnerCart(el));
        });
      } else if (isGooglePage) {
        main_accout_bx.innerHTML = '';
        googleItems.forEach((el, i) => {
          main_accout_bx.appendChild(createInnerCart(el));
        });
      }
      else if (isCanvasPage) {
        main_accout_bx.innerHTML = '';
        canvasItems.forEach((el, i) => {
          main_accout_bx.appendChild(createInnerCart(el));
        });
      }
      else if (isMỉcrosoftPage) {
        main_accout_bx.innerHTML = '';
        mỉcrosoftItems.forEach((el, i) => {
          main_accout_bx.appendChild(createInnerCart(el));
        });
      }
      else if (isNetflixPage) {
        main_accout_bx.innerHTML = '';
        console.log("Netflix page");
        console.log(netflixItems);
        netflixItems.forEach((el, i) => {
          main_accout_bx.appendChild(createInnerCart(el));
        });
      }
      else if (isSpotifyPage) {
        main_accout_bx.innerHTML = '';
        spotifyItems.forEach((el, i) => {
          main_accout_bx.appendChild(createInnerCart(el));
        });

      }
      else if (isAntiVirusPage) {
        main_accout_bx.innerHTML = '';
        antiVirusItems.forEach((el, i) => {
          main_accout_bx.appendChild(createInnerCart(el));
        });
      }
      else if (isVpnsPage) {
        main_accout_bx.innerHTML = '';
        vpnsItems.forEach((el, i) => {

          main_accout_bx.appendChild(createInnerCart(el));
        });
      }
      else if (isDropboxPage) {
        main_accout_bx.innerHTML = '';
        dropboxItems.forEach((el, i) => {
          main_accout_bx.appendChild(createInnerCart(el));
        });
      }
    }

    btn_Newest.addEventListener('click', () => {
      main_accout_bx.innerHTML = '';
      sortby_btn.innerHTML = `
        <h5>Mới nhất</h5>
          <i class="fa-solid fa-chevron-down"></i>
        `
      sortby_opt.classList.toggle('sortby-opt_active');
      newset_array.forEach((el, i) => {
        main_accout_bx.appendChild(createInnerCart(el));
      });
    });

    btn_low.addEventListener('click', () => {
      main_accout_bx.innerHTML = '';
      sortby_btn.innerHTML = `
        <h5>Gia Thap</h5>
          <i class="fa-solid fa-chevron-down"></i>
        `
      sortby_opt.classList.toggle('sortby-opt_active');
      low_array.sort(({ Price1: a }, { Price1: b }) => a - b)

      low_array.forEach((el, i) => {

        main_accout_bx.appendChild(createInnerCart(el));
      });
    })

    btn_hight.addEventListener('click', () => {
      main_accout_bx.innerHTML = '';
      sortby_btn.innerHTML = `
        <h5>Giá cao</h5>
          <i class="fa-solid fa-chevron-down"></i>
        `
      sortby_opt.classList.toggle('sortby-opt_active');
      hight_array.sort(({ Price1: a }, { Price1: b }) => b - a)
      hight_array.forEach((el, i) => {

        main_accout_bx.appendChild(createInnerCart(el));
      });
    })
    btn_All.addEventListener('click', () => {
      main_accout_bx.innerHTML = '';
      sortby_btn.innerHTML = `
        <h5>Tất cả</h5>
          <i class="fa-solid fa-chevron-down"></i>
        `
      sortby_opt.classList.toggle('sortby-opt_active');
      all_item_array.forEach((el, i) => {

        main_accout_bx.appendChild(createInnerCart(el));
      });
    })
    btn_search.addEventListener('click', () => {
      let search_input = document.getElementById('search-input').value;
      main_accout_bx.innerHTML = '';
      console.log(search_input.innerText)
      all_item_array.forEach((el, i) => {
        if (el.Name.toUpperCase().includes(search_input.toUpperCase())) {
          main_accout_bx.appendChild(createInnerCart(el));
        }

      });
    })
    btn_giaitri.addEventListener('click', () => {
      main_accout_bx.innerHTML = '';
      data.forEach((el, i) => {
        if (el.Tag.toUpperCase() === 'Giải Trí'.toUpperCase()) {
          console.log(el)
          main_accout_bx.appendChild(createInnerCart(el));

        }
      })
      console.log(main_accout_bx)

    })
    const securityItems = all_item_array.filter(item => item.Tag === "Bảo mật");
    btn_baomat.addEventListener('click', () => {
      main_accout_bx.innerHTML = '';
      securityItems.forEach((el, i) => {
        main_accout_bx.appendChild(createInnerCart(el));
      })
    })
    const educationItems = all_item_array.filter(item => item.Tag === "Học tập");
    btn_hoctap.addEventListener('click', () => {
      main_accout_bx.innerHTML = '';
      educationItems.forEach((el, i) => {
        main_accout_bx.appendChild(createInnerCart(el));
      })
    })
    const workitems = all_item_array.filter(item => item.Tag === "Làm việc");
    btn_lamviec.addEventListener('click', () => {
      main_accout_bx.innerHTML = '';
      workitems.forEach((el, i) => {
        main_accout_bx.appendChild(createInnerCart(el));
      })
    })
    const upgradeItems = all_item_array.filter(item => item.Tag === "Nâng cấp");
    btn_nangcap.addEventListener('click', () => {
      main_accout_bx.innerHTML = '';
      upgradeItems.forEach((el, i) => {
        main_accout_bx.appendChild(createInnerCart(el));
      })
    })
    const healthItems = all_item_array.filter(item => item.Tag === "Sức khỏe");
    btn_suckhoe.addEventListener('click', () => {
      main_accout_bx.innerHTML = '';
      healthItems.forEach((el, i) => {
        main_accout_bx.appendChild(createInnerCart(el));
      })
    })
    const accountItems = all_item_array.filter(item => item.Tag === "Tài khoản");
    btn_taikhoang.addEventListener('click', () => {
      main_accout_bx.innerHTML = '';
      accountItems.forEach((el, i) => {
        main_accout_bx.appendChild(createInnerCart(el));
      })
    })
    const keyItems = all_item_array.filter(item => item.Tag === "Key kích hoạt");
    btn_keykichhoat.addEventListener('click', () => {
      main_accout_bx.innerHTML = '';
      keyItems.forEach((el, i) => {
        main_accout_bx.appendChild(createInnerCart(el));
      })
    })
  });

