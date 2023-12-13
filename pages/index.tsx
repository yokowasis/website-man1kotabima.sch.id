import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";
import EduIndex from "../components/edu";
import Head from "next/head";
import { Settings, settings } from "../settings";
import Header from "./header";
import Footer from "./footer";

type Props = {
  allPosts: Post[];
  s: Settings;
};

export default function Index({ allPosts, s }: Props) {
  return (
    <>
      {/* <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout> */}
      <Head>
        <title>{s.InfoSekolah.Title}</title>
      </Head>

      <Header s={s} />

      <div
        className="container-fluid p-0 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn",
        }}
      >
        <div
          id="header-carousel"
          className="carousel slide pointer-event"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item">
              <img
                className="w-100"
                src="./assets-driving/carousel-1.jpg"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-2 text-light mb-5 animated slideInDown">
                        Learn To Drive With Confidence
                      </h1>
                      <a href="" className="btn btn-primary py-sm-3 px-sm-5">
                        Learn More
                      </a>
                      <a href="" className="btn btn-light py-sm-3 px-sm-5 ms-3">
                        Our Courses
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <img
                className="w-100"
                src="./assets-driving/carousel-2.jpg"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-2 text-light mb-5 slideInDown">
                        Safe Driving Is Our Top Priority
                      </h1>
                      <a href="" className="btn btn-primary py-sm-3 px-sm-5">
                        Learn More
                      </a>
                      <a href="" className="btn btn-light py-sm-3 px-sm-5 ms-3">
                        Our Courses
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div
              className="col-lg-4 wow fadeIn"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              <div
                className="bg-white shadow d-flex align-items-center h-100 p-4"
                style={{ minHeight: 150 }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square bg-primary">
                    <i className="fa fa-car text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5>Easy Driving Learn</h5>
                    <span>
                      Clita erat ipsum lorem sit sed stet duo justo erat amet
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeIn"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeIn",
              }}
            >
              <div
                className="bg-white shadow d-flex align-items-center h-100 p-4"
                style={{ minHeight: "150px" }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square bg-primary">
                    <i className="fa fa-users text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5>National Instructor</h5>
                    <span>
                      Clita erat ipsum lorem sit sed stet duo justo erat amet
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeIn"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <div
                className="bg-white shadow d-flex align-items-center h-100 p-4"
                style={{ minHeight: "150px" }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square bg-primary">
                    <i className="fa fa-file-alt text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5>Get licence</h5>
                    <span>
                      Clita erat ipsum lorem sit sed stet duo justo erat amet
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <div
                className="position-relative overflow-hidden ps-5 pt-5 h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="./assets-driving/about-1.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <img
                  className="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                  src="./assets-driving/about-2.jpg"
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div className="h-100">
                <h6 className="text-primary text-uppercase mb-2">About Us</h6>
                <h1 className="display-6 mb-4">
                  We Help Students To Pass Test &amp; Get A License On The First
                  Try
                </h1>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <div className="row g-2 mb-4 pb-2">
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Fully
                    Licensed
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Online
                    Tracking
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Afordable
                    Fee
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Best
                    Trainers
                  </div>
                </div>
                <div className="row g-4">
                  <div className="col-sm-6">
                    <a className="btn btn-primary py-3 px-5" href="">
                      Read More
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <a
                      className="d-inline-flex align-items-center btn btn-outline-primary border-2 p-2"
                      href="tel:+0123456789"
                    >
                      <span className="flex-shrink-0 btn-square bg-primary">
                        <i className="fa fa-phone-alt text-white"></i>
                      </span>
                      <span className="px-3">+012 345 6789</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl courses my-6 py-6 pb-0">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              maxWidth: "500px",
              visibility: "hidden",
              animationDelay: "0.1s",
              animationName: "none",
            }}
          >
            <h6 className="text-primary text-uppercase mb-2">
              Tranding Courses
            </h6>
            <h1 className="display-6 mb-4">
              Our Courses Upskill You With Driving Training
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "hidden",
                animationDelay: "0.1s",
                animationName: "none",
              }}
            >
              <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                    $99
                  </div>
                  <h5 className="mb-3">Automatic Car Lessons</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item small">
                      <i className="fa fa-signal text-primary me-2"></i>Beginner
                    </li>
                    <li className="breadcrumb-item small">
                      <i className="fa fa-calendar-alt text-primary me-2"></i>3
                      Week
                    </li>
                  </ol>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="./assets-driving/courses-1.jpg"
                    alt=""
                  />
                  <div className="courses-overlay">
                    <a className="btn btn-outline-primary border-2" href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
              style={{
                visibility: "hidden",
                animationDelay: "0.3s",
                animationName: "none",
              }}
            >
              <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                    $99
                  </div>
                  <h5 className="mb-3">Highway Driving Lesson</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item small">
                      <i className="fa fa-signal text-primary me-2"></i>Beginner
                    </li>
                    <li className="breadcrumb-item small">
                      <i className="fa fa-calendar-alt text-primary me-2"></i>3
                      Week
                    </li>
                  </ol>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="./assets-driving/courses-2.jpg"
                    alt=""
                  />
                  <div className="courses-overlay">
                    <a className="btn btn-outline-primary border-2" href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "hidden",
                animationDelay: "0.5s",
                animationName: "none",
              }}
            >
              <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                    $99
                  </div>
                  <h5 className="mb-3">International Driving</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item small">
                      <i className="fa fa-signal text-primary me-2"></i>Beginner
                    </li>
                    <li className="breadcrumb-item small">
                      <i className="fa fa-calendar-alt text-primary me-2"></i>3
                      Week
                    </li>
                  </ol>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="./assets-driving/courses-3.jpg"
                    alt=""
                  />
                  <div className="courses-overlay">
                    <a className="btn btn-outline-primary border-2" href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-8 my-6 mb-0 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "hidden",
                animationDelay: "0.1s",
                animationName: "none",
              }}
            >
              <div className="bg-primary text-center p-5">
                <h1 className="mb-4">Make Appointment</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="gname"
                          placeholder="Gurdian Name"
                        />
                        <label htmlFor="gname">Your Name</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control border-0"
                          id="gmail"
                          placeholder="Gurdian Email"
                        />
                        <label htmlFor="gmail">Your Email</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="cname"
                          placeholder="Child Name"
                        />
                        <label htmlFor="cname">Courses Type</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="cage"
                          placeholder="Child Age"
                        />
                        <label htmlFor="cage">Car Type</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control border-0"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: 100 }}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-dark w-100 py-3" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "hidden",
                animationDelay: "0.1s",
                animationName: "none",
              }}
            >
              <h6 className="text-primary text-uppercase mb-2">
                Why Choose Us!
              </h6>
              <h1 className="display-6 mb-4">
                Best Driving Training Agency In Your City
              </h1>
              <p className="mb-5">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row gy-5 gx-4">
                <div
                  className="col-sm-6 wow fadeIn"
                  data-wow-delay="0.1s"
                  style={{
                    visibility: "hidden",
                    animationDelay: "0.1s",
                    animationName: "none",
                  }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-square bg-primary me-3">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <h5 className="mb-0">Fully Licensed</h5>
                  </div>
                  <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                  </span>
                </div>
                <div
                  className="col-sm-6 wow fadeIn"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "hidden",
                    animationDelay: "0.2s",
                    animationName: "none",
                  }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-square bg-primary me-3">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <h5 className="mb-0">Online Tracking</h5>
                  </div>
                  <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                  </span>
                </div>
                <div
                  className="col-sm-6 wow fadeIn"
                  data-wow-delay="0.3s"
                  style={{
                    visibility: "hidden",
                    animationDelay: "0.3s",
                    animationName: "none",
                  }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-square bg-primary me-3">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <h5 className="mb-0">Afordable Fee</h5>
                  </div>
                  <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                  </span>
                </div>
                <div
                  className="col-sm-6 wow fadeIn"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "hidden",
                    animationDelay: "0.4s",
                    animationName: "none",
                  }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-square bg-primary me-3">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <h5 className="mb-0">Best Trainers</h5>
                  </div>
                  <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "hidden",
                animationDelay: "0.5s",
                animationName: "none",
              }}
            >
              <div
                className="position-relative overflow-hidden pe-5 pt-5 h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="./assets-driving/about-1.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <img
                  className="position-absolute top-0 end-0 bg-white ps-3 pb-3"
                  src="./assets-driving/about-2.jpg"
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-6">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              maxWidth: "500px",
              visibility: "hidden",
              animationDelay: "0.1s",
              animationName: "none",
            }}
          >
            <h6 className="text-primary text-uppercase mb-2">Meet The Team</h6>
            <h1 className="display-6 mb-4">
              We Have Great Experience Of Driving
            </h1>
          </div>
          <div className="row g-0 team-items">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "hidden",
                animationDelay: "0.1s",
                animationName: "none",
              }}
            >
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="./assets-driving/team-1.jpg"
                    alt=""
                  />
                  <div className="team-social text-center">
                    <a
                      className="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h5 className="mt-2">Full Name</h5>
                  <span>Trainer</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
              style={{
                visibility: "hidden",
                animationDelay: "0.3s",
                animationName: "none",
              }}
            >
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="./assets-driving/team-2.jpg"
                    alt=""
                  />
                  <div className="team-social text-center">
                    <a
                      className="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h5 className="mt-2">Full Name</h5>
                  <span>Trainer</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "hidden",
                animationDelay: "0.5s",
                animationName: "none",
              }}
            >
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="./assets-driving/team-3.jpg"
                    alt=""
                  />
                  <div className="team-social text-center">
                    <a
                      className="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h5 className="mt-2">Full Name</h5>
                  <span>Trainer</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
              style={{
                visibility: "hidden",
                animationDelay: "0.7s",
                animationName: "none",
              }}
            >
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="./assets-driving/team-4.jpg"
                    alt=""
                  />
                  <div className="team-social text-center">
                    <a
                      className="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h5 className="mt-2">Full Name</h5>
                  <span>Trainer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer s={s} />
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  settings.InfoSekolah.Title = `Official Website ${settings.InfoSekolah.Nama}`;

  return {
    props: { allPosts, s: settings },
  };
};
