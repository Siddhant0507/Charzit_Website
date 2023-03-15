import React from 'react'
import "./review.css"

function Review() {
  return (
    <>
    <div>
          <h3 className="faq">Testimonials</h3>
          <h1 className="review-mainheading">Everyone Says the Same Thing</h1>
        </div>

        <div className="review-div">
          <div className="review-text">
            <h1 className="review-heading">
              Our Customer Love
              <span className="greenText"> What we </span>Do
            </h1>
            <p className="review-desc">
              we are environmentally friendly, easy to find anywhere, our
              products are good, our service has been proven to be the best
            </p>
          </div>
          <div className="review-card">
            <div className="review-body">
              <p className="review">
                this product has a bunch of amazing tools wich improves our
                business
              </p>
              <h4 className="customer-name">Siddhant Kotambe</h4>
            </div>
            <div className="review-body">
              <p className="review">
                this product has a bunch of amazing tools wich improves our
                business
              </p>
              <h4 className="customer-name">Mahesh Kalkute</h4>
            </div>
            <div className="review-body">
              <p className="review">
                this product has a bunch of amazing tools wich improves our
                business
              </p>
              <h4 className="customer-name">Krushna Channe</h4>
            </div>
          </div>
        </div>
    </>
  )
}

export default Review