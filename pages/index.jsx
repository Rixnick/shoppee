import React from 'react';
import Banner from '../components/Banner';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PRODUCTS } from '../graphql/Products';
//import ProductItem from '../components/Products/ProductItem';
import Link from 'next/link';

function Home() {
    const { data, loading, error } = useQuery(QUERY_PRODUCTS) //, {pollInterval:3000} Add pollInterval to refresh page per second
    if (error) return <p>Ooops....! Something went wrong, Plz try again later</p>
    if (loading) return <p>loading...</p>
    console.log("Product Data", data)
    return (
        <>
            <div className="home-page">
                <main>
                    {/* <Banner /> */}
                    {/* main Product grids */}
                    <section className="recent-product">
                        <h2 className="dash-title">Recently Products</h2>
                        <div className="home-product-cards">
                            <div className="product-cart-single">
                                <div className="product-card-header">
                                    <div className="img__1"></div>
                                </div>
                                <div className="produc-card-body">
                                    <h2>Product Name</h2>
                                    <h3>$12.09</h3>
                                </div>
                                <div className="produc-card-footer">
                                    <Link href='' >View </Link>
                                    <a type="button" >Buy Now!</a>
                                </div>
                            </div>
                            <div className="product-cart-single">
                                <div className="product-card-header">
                                    <div className="im__2"></div>
                                </div>
                                <div className="produc-card-body">
                                    <h2>Product Name</h2>
                                    <h3>$12.09</h3>
                                </div>
                                <div className="produc-card-footer">
                                    <Link href='' >View </Link>
                                    <a type="button" >Buy Now!</a>
                                </div>
                            </div>
                            <div className="product-cart-single">
                                <div className="product-card-header">
                                    <div className="img__1"></div>
                                </div>
                                <div className="produc-card-body">
                                    <h2>Product Name</h2>
                                    <h3>$12.09</h3>
                                </div>
                                <div className="produc-card-footer">
                                    <Link href='' >View </Link>
                                    <a type="button" >Buy Now!</a>
                                </div>
                            </div>
                            <div className="product-cart-single">
                                <div className="product-card-header">
                                    <div className="im__2"></div>
                                </div>
                                <div className="produc-card-body">
                                    <h2>Product Name</h2>
                                    <h3>$12.09</h3>
                                </div>
                                <div className="produc-card-footer">
                                    <Link href='' >View </Link>
                                    <a type="button" >Buy Now!</a>
                                </div>
                            </div>
                            <div className="product-cart-single">
                                <div className="product-card-header">
                                    <div className="img__1"></div>
                                </div>
                                <div className="produc-card-body">
                                    <h2>Product Name</h2>
                                    <h3>$12.09</h3>
                                </div>
                                <div className="produc-card-footer">
                                    <Link href='' >View </Link>
                                    <a type="button" >Buy Now!</a>
                                </div>
                            </div>
                            <div className="product-cart-single">
                                <div className="product-card-header">
                                    <div className="im__2"></div>
                                </div>
                                <div className="produc-card-body">
                                    <h2>Product Name</h2>
                                    <h3>$12.09</h3>
                                </div>
                                <div className="produc-card-footer">
                                    <Link href='' >View </Link>
                                    <a type="button" >Buy Now!</a>
                                </div>
                            </div>
                            <div className="product-cart-single">
                                <div className="product-card-header">
                                    <div className="img__1"></div>
                                </div>
                                <div className="produc-card-body">
                                    <h2>Product Name</h2>
                                    <h3>$12.09</h3>
                                </div>
                                <div className="produc-card-footer">
                                    <Link href='' >View </Link>
                                    <a type="button" >Buy Now!</a>
                                </div>
                            </div>
                            <div className="product-cart-single">
                                <div className="product-card-header">
                                    <div className="im__2"></div>
                                </div>
                                <div className="produc-card-body">
                                    <h2>Product Name</h2>
                                    <h3>$12.09</h3>
                                </div>
                                <div className="produc-card-footer">
                                    <Link href='' >View </Link>
                                    <a type="button" >Buy Now!</a>
                                </div>
                            </div>
                            <div className="product-cart-single">
                                <div className="product-card-header">
                                    <div className="img__1"></div>
                                </div>
                                <div className="produc-card-body">
                                    <h2>Product Name</h2>
                                    <h3>$12.09</h3>
                                </div>
                                <div className="produc-card-footer">
                                    <Link href='' >View </Link>
                                    <a type="button" >Buy Now!</a>
                                </div>
                            </div>
                            <div className="product-cart-single">
                                <div className="product-card-header">
                                    <div className="im__2"></div>
                                </div>
                                <div className="produc-card-body">
                                    <h2>Product Name</h2>
                                    <h3>$12.09</h3>
                                </div>
                                <div className="produc-card-footer">
                                    <Link href='' >View </Link>
                                    <a type="button" >Buy Now!</a>
                                </div>
                            </div>
                            <div className="product-cart-single">
                                <div className="product-card-header">
                                    <div className="img__1"></div>
                                </div>
                                <div className="produc-card-body">
                                    <h2>Product Name</h2>
                                    <h3>$12.09</h3>
                                </div>
                                <div className="produc-card-footer">
                                    <Link href='' >View </Link>
                                    <a type="button" >Buy Now!</a>
                                </div>
                            </div>
                            <div className="product-cart-single">
                                <div className="product-card-header">
                                    <div className="im__2"></div>
                                </div>
                                <div className="produc-card-body">
                                    <h2>Product Name</h2>
                                    <h3>$12.09</h3>
                                </div>
                                <div className="produc-card-footer">
                                    <Link href='' >View </Link>
                                    <a type="button" >Buy Now!</a>
                                </div>
                            </div>
                            <div className="product-cart-single">
                                <div className="product-card-header">
                                    <div className="img__1"></div>
                                </div>
                                <div className="produc-card-body">
                                    <h2>Product Name</h2>
                                    <h3>$12.09</h3>
                                </div>
                                <div className="produc-card-footer">
                                    <Link href='' >View </Link>
                                    <a type="button" >Buy Now!</a>
                                </div>
                            </div>
                            <div className="product-cart-single">
                                <div className="product-card-header">
                                    <div className="im__2"></div>
                                </div>
                                <div className="produc-card-body">
                                    <h2>Product Name</h2>
                                    <h3>$12.09</h3>
                                </div>
                                <div className="produc-card-footer">
                                    <Link href='' >View </Link>
                                    <a type="button" >Buy Now!</a>
                                </div>
                            </div>
                            <div className="product-cart-single">
                                <div className="product-card-header">
                                    <div className="img__1"></div>
                                </div>
                                <div className="produc-card-body">
                                    <h2>Product Name</h2>
                                    <h3>$12.09</h3>
                                </div>
                                <div className="produc-card-footer">
                                    <Link href='' >View </Link>
                                    <a type="button" >Buy Now!</a>
                                </div>
                            </div>
                            

                            {/* {
                                data.products.map(prod =>
                                    <ProductItem key={prod.id} prod={prod} />
                                )
                            } */}
                        </div>
                    </section><br/>
                    <section>
                    <div className="home-deal__card">
                            <div className="home-deal__single">
                                <div className="home-deal__header">
                                    <div className="home__img">
                                        <h2>Hot Deal of the Week</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Home;
