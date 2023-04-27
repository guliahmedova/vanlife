import React from 'react'

const Reviews = () => {
  return (
    <div className='reviews'>
      <div className="container">
        <h1 className='reviews-title'>Your reviews <span> <span>last</span> <strong>30 days</strong></span></h1>

        <div className='rating'>
          <div className="rating-title">
            <span className='rate'>5.0</span>
            <span className='star'>★</span>
            <span className='rate-text'>overall rating</span>
          </div>

          <div className="rating-sliders">
            <div className="side">
              <div>5 star</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-5"></div>
              </div>
            </div>
            <div className="side right">
              <div>100%</div>
            </div>
            <div className="side">
              <div>4 star</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-4"></div>
              </div>
            </div>
            <div className="side right">
              <div>0%</div>
            </div>
            <div className="side">
              <div>3 star</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-3"></div>
              </div>
            </div>
            <div className="side right">
              <div>0%</div>
            </div>
            <div className="side">
              <div>2 star</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-2"></div>
              </div>
            </div>
            <div className="side right">
              <div>0%</div>
            </div>
            <div className="side">
              <div>1 star</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-1"></div>
              </div>
            </div>
            <div className="side right">
              <div>0%</div>
            </div>
          </div>
        </div>

        <div className='bottom-review'>
          <h3>Reviews (2)</h3>
          <div className='review-card'>
            <span className='star'>★★★★★</span>
            <span className='name'><strong>Elliot</strong> December 1,2022</span>
            <p>
              The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks
              and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!
            </p>
          </div>

          <hr />

          <div className='review-card'>
            <span className='star'>★★★★★</span>
            <span className='name'><strong>Sandy</strong> November 23,2022</span>
            <p>
              This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews