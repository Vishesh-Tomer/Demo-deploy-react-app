import React from 'react'
import { Link } from 'react-router-dom'

export default function About () {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-white shadow-lg">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <a class="navbar-brand" href="index.html">
                    Crispy Kitchen
                </a>

                <div class="d-lg-none">
                    <button type="button" class="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">Reservation</button>
                </div>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li className="nav-item">
                        {/* <a class="nav-link" href="/">Home</a> */}
                             <Link to = '/'>Home</Link>
                    
                        </li>

                        <li className="nav-item">
                        {/* <a class="nav-link active" href="/">Story</a> */}
                        <Link to = '/About'>About</Link>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="menu.html">Menu</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="news.html">Our Updates</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>

                <div class="d-none d-lg-block">
                    <button type="button" class="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">Reservation</button>
                </div>

            </div>
        </nav>

        <main>

            <header class="site-header site-about-header">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-10 col-12 mx-auto">
                            <h1 class="text-white">Kitchen's Story</h1>

                            <strong class="text-white">this is how our kitchen evolved in new digital era</strong>
                        </div>

                    </div>
                </div>

                <div class="overlay"></div>
            </header>

            <section class="about section-padding bg-white">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-12 mb-2">
                            <h4 class="mb-3">Crispy Kitchen is the latest Bootstrap 5 HTML template provided by Tooplate website.</h4>

                            <a href="news.html" class="custom-btn btn btn-dark mt-3">Check out News</a>

                            <a href="contact.html" class="custom-btn btn btn-danger mt-3 ms-3">Say Hi</a>
                        </div>

                        <div class="col-lg-6 col-12">
                        
                        	<p>Since this website template is 100% free to use, you can edit and apply it for your commercial restaurant websites. There are 6 HTML pages included in this template. Please <strong>click "Reservation" button</strong> on the top right to see the pop-up reservation form.</p>
                        
                            <p>You are NOT allowed to redistribute the template ZIP file on any template donwnload website. Please <a href="https://www.tooplate.com/contact" target="_blank">contact us</a> for more information.</p>

                        </div>

                    </div>
                </div>
            </section>

            <section class="about section-padding">
                <div class="container">
                    <div class="row">

                        <div class="col-12">
                            <h2 class="mb-5">Team Members</h2>
                        </div>

                        <div class="col-lg-4 col-12">
                            <div class="team-thumb">
                                <img src="images/team/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg" class="img-fluid team-image" alt=""/>
                                
                                <div class="team-info">
                                    <h4 class="mt-3 mb-0">Sophia</h4>

                                    <p>CEO &amp; Founder</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-12 my-lg-0 my-4">
                            <div class="team-thumb">
                                <img src="images/team/nicolas-horn-MTZTGvDsHFY-unsplash.jpg" class="img-fluid team-image" alt=""/>

                                <h4 class="mt-3 mb-0">Benjamin W.</h4>

                                <p>Restaurant Manager</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-12">
                            <div class="team-thumb">
                                <img src="images/team/rc-cf-FMh5o5m5N9E-unsplash.jpg" class="img-fluid team-image" alt=""/>
                                
                                <h4 class="mt-3 mb-0">Muchen Jack</h4>

                                <p>Senior Chef</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
            <section class="newsletter section-padding bg-white">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-12">
                            <img src="images/charles-deluvio-FdDkfYFHqe4-unsplash.jpg" class="img-fluid newsletter-image" alt=""/>
                        </div>

                        <div class="col-lg-6 col-12 d-flex align-items-center mt-5 mt-lg-0 mx-auto">
                            <div class="subscribe-form-wrap">
                                <h4 class="mb-0">Our Newsletter</h4>

                                <p>The food news every day</p>

                                <form class="custom-form subscribe-form mt-4" role="form">
                                  
                                    <input type="email" name="subscribe-email" id="subscribe-email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Your email address" required=""/>
                                    <div>
                                    <button type="submit" class="form-control mb-3" id="subscribe">Subscribe</button>

                                    <small>By signing up, you agree to our Privacy Notice and the data policy</small>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>

        <footer class="site-footer section-padding">
            
            <div class="container">
                
                <div class="row">

                    <div class="col-12">
                        <h4 class="text-white mb-4 me-5">Crispy Kitchen</h4>
                    </div>

                    <div class="col-lg-4 col-md-7 col-xs-12 tooplate-mt30">
                        <h6 class="text-white mb-lg-4 mb-3">Location</h6>

                        <p>121 Einstein Loop N, Bronx, NY 10475, United States</p>

                        <a href="https://goo.gl/maps/wZVGLA7q64uC1s886" class="custom-btn btn btn-dark mt-2">Directions</a>
                    </div>

                    <div class="col-lg-4 col-md-5 col-xs-12 tooplate-mt30">
                        <h6 class="text-white mb-lg-4 mb-3">Opening Hours</h6>

                        <p class="mb-2">Monday - Friday</p>

                        <p>10:00 AM - 08:00 PM</p>

                        <p>Tel: <a href="tel: 010-02-0340" class="tel-link">010-02-0340</a></p>
                    </div>

                    <div class="col-lg-4 col-md-6 col-xs-12 tooplate-mt30">
                        <h6 class="text-white mb-lg-4 mb-3">Social</h6>

                        <ul class="social-icon">
                            <li><a href="#" class="social-icon-link bi-facebook"></a></li>

                            <li><a href="#" class="social-icon-link bi-instagram"></a></li>

                            <li><a href="https://twitter.com/search?q=tooplate.com&src=typed_query&f=live" target="_blank"
                            	 class="social-icon-link bi-twitter"></a></li>

                            <li><a href="#" class="social-icon-link bi-youtube"></a></li>
                        </ul>
{/*                     
                        <p class="copyright-text tooplate-mt60">Copyright © 2022 Crispy Kitchen Co., Ltd.
                        <br>Design: <a rel="nofollow" href="https://www.tooplate.com/" target="_blank">Tooplate</a></p>
                         */}
                    </div>

                </div>
                
             </div>
             
        </footer>

  
        <div class="modal fade" id="BookingModal" tabindex="-1" aria-labelledby="BookingModal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="mb-0">Reserve a table</h3>

                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body d-flex flex-column justify-content-center">
                        <div class="booking">
                            
                            <form class="booking-form row" role="form" action="#" method="post">
                                <div class="col-lg-6 col-12">
                                    <label for="name" class="form-label">Full Name</label>

                                    <input type="text" name="name" id="name" class="form-control" placeholder="Your Name" required/>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <label for="email" class="form-label">Email Address</label>

                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="your@email.com" required/>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <label for="phone" class="form-label">Phone Number</label>

                                    <input type="telephone" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class="form-control" placeholder="123-456-7890"/>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <label for="people" class="form-label">Number of persons</label>

                                    <input type="text" name="people" id="people" class="form-control" placeholder="12 persons"/>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <label for="date" class="form-label">Date</label>

                                    <input type="date" name="date" id="date" value="" class="form-control"/>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <label for="time" class="form-label">Time</label>

                                    <select class="form-select form-control" name="time" id="time">
                                      <option value="5" selected>5:00 PM</option>
                                      <option value="6">6:00 PM</option>
                                      <option value="7">7:00 PM</option>
                                      <option value="8">8:00 PM</option>
                                      <option value="9">9:00 PM</option>
                                    </select>
                                </div>

                                <div class="col-12">
                                    <label for="message" class="form-label">Special Request</label>

                                    <textarea class="form-control" rows="4" id="message" name="message" placeholder=""></textarea>
                                </div>

                                <div class="col-lg-4 col-12 ms-auto">
                                    <button type="submit" class="form-control">Submit Request</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="modal-footer"></div>
                    
                </div>
                
            </div>
        </div>

     
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/custom.js"></script>

    </>
  )
}
