/**
 * ProductsTab component that displays product listings in a tabbed interface
 * Shows different categories of shoes with product details and ratings
 */
import React from 'react';
import product1 from '../../../../assets/images/prod-1.jpg';
import product2 from '../../../../assets/images/prod-2.jpg';
import product3 from '../../../../assets/images/prod-3.jpg';

// Sample product data with details for display
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
            {/* Main product tab container with navigation and content */}
            <div className="product-tab mt-4">
                {/* Navigation area with tabs for different shoe categories */}
                <div className="nav-area d-flex flex-wrap justify-content-between align-items-center mb-4 pb-2">
                    <h4 className="title4 w-100">shoes</h4>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="sneakers-tab" data-bs-toggle="tab" data-bs-target="#sneakers"
                            type="button" role="tab" aria-controls="sneakers" aria-selected="true">
                            <span className="item-name">Sneakers</span> 
                            <span className="item-count" aria-label="6 items">06</span>  
                        </button>
                        </li>
                        <li className="nav-item" role="presentation">
                        <button className="nav-link" id="sports-shoes-tab" data-bs-toggle="tab" data-bs-target="#sports-shoes"
                            type="button" role="tab" aria-controls="sports-shoes" aria-selected="false">
                            <span className="item-name">Sports Shoes</span>
                            <span className="item-count" aria-label="2 items">02</span> 
                        </button>
                        </li>
                        <li className="nav-item" role="presentation">
                        <button className="nav-link" id="casual-shoes-tab" data-bs-toggle="tab" data-bs-target="#casual-shoes"
                            type="button" role="tab" aria-controls="casual-shoes" aria-selected="false">
                            <span className="item-name">Casual Shoes</span>
                            <span className="item-count" aria-label="3 items">03</span> 
                        </button>
                        </li>
                    </ul>
                    <button className="border-btn" aria-label="View all shoes">View all</button>
                </div>
                {/* Tab content area displaying products based on selected tab */}
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="sneakers" role="tabpanel" aria-labelledby="sneakers-tab">
                        <div className="row">
                            {productData.map((product) => (
                                <div className="col-md-4 mb-4" key={product.id}>
                                    <div className="prod-item-box">
                                        <div className="img-area">
                                            {product.badge && (
                                                <span className="seller-badge">{product.badge}</span>
                                            )}
                                            <img src={product.image} alt={product.title} className="img-fluid" />
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
                                                        aria-hidden="true"
                                                    >
                                                        ★
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="count mb-0" aria-label={`${product.ratingCount} ratings`}>{product.ratingCount} ratings</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Empty tab panes for other categories */}
                    <div className="tab-pane fade" id="sports-shoes" role="tabpanel" aria-labelledby="sports-shoes-tab">
                        <p className="text-center py-4">No data available for Sports Shoes</p>
                    </div>
                    <div className="tab-pane fade" id="casual-shoes" role="tabpanel" aria-labelledby="casual-shoes-tab">
                        <p className="text-center py-4">No data available for Casual Shoes</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsTab;
