const fetchCategories = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCatagoris(data.data))
}

const displayCatagoris = (data) => {
    const catagorisContainer = document.getElementById('catagoris-container');
    data.news_category.forEach(catagoris => {
        // const { category_name, category_id } = catagoris
        // console.log(catagoris)
        catagorisContainer.innerHTML += `<li onClick="singleCategories('${catagoris.category_id}' , '${catagoris.category_name}')"  class="nav-item" class="nav-link" >${catagoris.category_name}</li>`
    });
}

const singleCategories =( category_id , category_name)=> {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaycategory(data,category_name))
}
const displaycategory=( data , category_name)=>{
    console.log(data.data.length , category_name)
    document.getElementById('news-count').innerText=data.data.length
    document.getElementById('category-name').innerText=category_name
    const allNews=document.getElementById('news-container')
    allNews.innerHTML=''
    data.data.forEach(news => {
        console.log(news)
        const {image_url,thumbnail_url,details,author,rating,title}=news
        allNews.innerHTML +=`
                 <div class="card mb-3" >
                    <div class="row g-0 d-flex align-items-center">
                      <div class="col-md-4">
                        <img src="${image_url}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h3 class="card-title">${title}</h3>
                          <p class="card-text">${details.slice(0,300) + '...'}</p>
                          <div class="card-footer d-flex flex-row justify-content-between align-items-center bg-transparent border-0">
                               <div class="d-flex justify-content-between gap-3 align-items-center">
                                   <div><img class="image rounded-circle" src="${author.img}" alt=""></div>
                                   <div class="d-flex flex-column gap-0">
                                     <p class="m-0 fw-bold">${author.name}</p>
                                     <p class="m-0">${author.published_date}</p>
                                   </div>
                                </div>
                             <div> <i class="fa-solid fa-eye"></i><span class="m-0 fw-bold"> ${rating.number}M </span></div>
                             <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>
                             <button onclick="openNewsDetails('${data}')"> <i class="fa-solid fa-arrow-right fa-2x text-primary"></i> </button>
                         </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
        `
    });
}

const openNewsDetails =( category_id)=> {
    
    console.log(category_id)
    // const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    // // console.log(url)
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displaycategory(data,category_name))
}
fetchCategories()
// singleCategories()
