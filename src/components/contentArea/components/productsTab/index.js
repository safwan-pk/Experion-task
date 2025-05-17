import React from 'react';
import product1 from '../../../../assets/images/prod-1.jpg';
import product2 from '../../../../assets/images/prod-2.jpg';
import product3 from '../../../../assets/images/prod-3.jpg';

const productData = [
    {
      id: 1,
      image: product1,
      title: "Puma Black Bun PumaSmashVulc Sneakers",
      subtitle: "Men Crater Puma Sneakers",
      price: 5467,
      description: `This is PUMA.
  PUMA has associations with some of the most elite athletes, such as sprint legend Usain Bolt, star striker Antoine Griezmann, Indian Cricket Captain Virat Kohli, fashion icons like Cara Delevingne, Selena Gomez, and many more.`,
      ratings: 4,
      ratingCount: 115,
      badge: "Best seller",
    },
    {
        id: 2,
        image: product2,
        title: "Adidas neo Men's Vs Set Sneakers",
        subtitle: "Men Crater Adidas Sneakers",
        price: 4537,
        description: `This is Adidas.
        As one of the world’s leading sports brands, Adidas believes in standing on the same playing field as the fastest athletes on the planet. With a mission of Forever Faster, PUMA shares excitement in Teamsports, innovates Golf, brings style into Running . Adidas has associations with some of the most elite athletes, such as sprint legend Usain Bolt and many more.`,
        ratings: 4,
        ratingCount: 115,
        badge: "Best seller",
      },
      {
        id: 3,
      image: product3,
      title: "Puma Black Bun PumaSmashVulc Sneakers",
      subtitle: "Men Crater Puma Sneakers",
      price: 5467,
      description: `This is PUMA.
  PUMA has associations with some of the most elite athletes, such as sprint legend Usain Bolt, star striker Antoine Griezmann, Indian Cricket Captain Virat Kohli, fashion icons like Cara Delevingne, Selena Gomez, and many more.`,
      ratings: 4,
      ratingCount: 115,
      },
    // Add more product objects as needed
  ];


function ProductsTab() {
    return (
        <div>

            <div className="product-tab mt-4">
                <div className="nav-area d-flex flex-wrap justify-content-between align-items-center mb-4 pb-2">
                    <h4 className="title4 w-100">shoes</h4>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                            type="button" role="tab" aria-controls="home" aria-selected="true">
                            <span className="item-name">Sneakers</span> 
                            <span className="item-count">06</span>  
                        </button>
                        </li>
                        <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                            type="button" role="tab" aria-controls="profile" aria-selected="false">
                            <span className="item-name">Sports Shoes</span>
                            <span className="item-count">02</span> 
                        </button>
                        </li>
                        <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                            type="button" role="tab" aria-controls="contact" aria-selected="false">
                            <span className="item-name">Sports Shoes</span>
                            <span className="item-count">03</span> 
                        </button>
                        </li>
                    </ul>
                    <button className="border-btn">View all</button>
                </div>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row">
                            {productData.map((product) => (
                                <div className="col-md-4 mb-4">
                                <div className="prod-item-box" key={product.id}>
                                <div className="img-area">
                                {product.badge && (
                                    <span className="seller-badge">{product.badge}</span>
                                )}
                                    <img src={product.image} alt="Product" className="img-fluid" />
                                </div>
                                <h5 className="title5 roboto-medium mb-1">{product.title}</h5>
                                <p className="mb-2">{product.subtitle}</p>
                                <h6 className="title6 roboto-bold">Rs.{product.price}</h6>
                                <div className="mt-4">
                                    <h5 className="title5 roboto-medium">Description</h5>
                                    <p>{product.description}</p>
                                </div>
                                <div className="rating me-2">
                                    <div>
                                    {[...Array(5)].map((_, index) => (
                                        <span
                                        key={index}
                                        className={`star ${index < product.ratings ? "active" : ""}`}
                                        >
                                        ★
                                        </span>
                                    ))}
                                    </div>
                                    <p className="count mb-0">{product.ratingCount} ratings</p>
                                </div>
                                </div>
                                </div>
                            ))}
                        </div>
                    
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    No data...
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    No data...
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsTab
