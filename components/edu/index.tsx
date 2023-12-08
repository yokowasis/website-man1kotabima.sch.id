import Head from "next/head";
import { settings } from "../../settings";
import PostType from "../../interfaces/post";
import Link from "next/link";

type Props = {
  posts: PostType[];
};

const EduIndex = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="pingback" href="https://man1.dev.app.web.id/xmlrpc.php" />

        <title>Home | Web {settings.InfoSekolah.Nama}</title>
        <meta name="robots" content="max-image-preview:large" />

        <link rel="stylesheet" href="/index.css" type="text/css" media="all" />
        <link
          rel="stylesheet"
          id="et-divi-open-sans-css"
          href="/assets-template/css.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="divi-dynamic-css"
          href="/assets-template/et-divi-dynamic-9.css"
          as="style"
          media="all"
        />
        <link
          rel="stylesheet"
          id="et-builder-googlefonts-cached-css"
          href="/assets-template/css-1.css"
          type="text/css"
          media="all"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link
          rel="stylesheet"
          as="style"
          id="et-core-unified-deferred-9-cached-inline-styles"
          href="/assets-template/et-core-unified-deferred-9.min.css"
        />
      </Head>
      <div className="page-template page-template-page-template-blank page-template-page-template-blank-php page page-id-9 et_pb_button_helper_class et_cover_background et_pb_gutter windows et_pb_gutters3 et_pb_pagebuilder_layout et_no_sidebar et_divi_theme et-db chrome">
        <div id="page-container">
          <div id="main-content">
            <article
              id="post-9"
              className="post-9 page type-page status-publish hentry"
            >
              <div className="entry-content">
                <div className="et-l et-l--post">
                  <div className="et_builder_inner_content et_pb_gutters3">
                    <div
                      className="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular"
                      style={{
                        backgroundImage: `linear-gradient(90deg, #8300e9 0%, rgba(0, 0, 0, 0) 100%),url('${settings.HomeBackground}') !important`,
                      }}
                    >
                      <div className="et_pb_row et_pb_row_0">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_0 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_divider_0 et_pb_space et_pb_divider_hidden">
                            <div className="et_pb_divider_internal"></div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h1>Welcome To {settings.InfoSekolah.Nama}</h1>
                            </div>
                          </div>
                          <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_module">
                            <a
                              className="et_pb_button et_pb_button_0 et_pb_bg_layout_light"
                              href=""
                            >
                              Visit Us
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_row et_pb_row_1 et_pb_equal_columns et_pb_gutters1 et_pb_row_6col">
                        <div className="et_pb_column et_pb_column_1_6 et_pb_column_1 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_1 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>Academics</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_2 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>
                                <span>
                                  Membangun Kecerdasan Berbasis Nilai-Nilai Ilmu
                                  Agama
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_image et_pb_image_0">
                            <a href="#">
                              <span className="et_pb_image_wrap">
                                <img
                                  decoding="async"
                                  width="60"
                                  height="18"
                                  src="/assets-template/high-school_26.png"
                                  alt=""
                                  title="high-school_26"
                                  className="wp-image-13"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_6 et_pb_column_2 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_3 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>Teachers</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_4 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>
                                <span>
                                  Guru Berdedikasi, Membimbing dengan Kasih dan
                                  Pengetahuan
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_image et_pb_image_1">
                            <a href="#">
                              <span className="et_pb_image_wrap">
                                <img
                                  decoding="async"
                                  width="60"
                                  height="18"
                                  src="/assets-template/high-school_26.png"
                                  alt=""
                                  title="high-school_26"
                                  className="wp-image-13"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_6 et_pb_column_3 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_5 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>Classes</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_6 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>
                                <span>
                                  Pembelajaran Holistik: Menyatu Ilmu Dunia dan
                                  Akhirat
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_image et_pb_image_2">
                            <a href="#">
                              <span className="et_pb_image_wrap">
                                <img
                                  decoding="async"
                                  width="60"
                                  height="18"
                                  src="/assets-template/high-school_26.png"
                                  alt=""
                                  title="high-school_26"
                                  className="wp-image-13"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_6 et_pb_column_4 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_7 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>Events</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_8 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>
                                <span>
                                  Menginspirasi Lewat Acara yang Mempererat Iman
                                  dan Pengetahuan
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_image et_pb_image_3">
                            <a href="#">
                              <span className="et_pb_image_wrap">
                                <img
                                  decoding="async"
                                  width="60"
                                  height="18"
                                  src="/assets-template/high-school_26.png"
                                  alt=""
                                  title="high-school_26"
                                  className="wp-image-13"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_6 et_pb_column_5 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_9 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>Programs</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_10 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>
                                <span>
                                  Program Unggulan: Menggali Potensi dengan
                                  Sentuhan Spiritual
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_image et_pb_image_4">
                            <a href="#">
                              <span className="et_pb_image_wrap">
                                <img
                                  decoding="async"
                                  width="60"
                                  height="18"
                                  src="/assets-template/high-school_26.png"
                                  alt=""
                                  title="high-school_26"
                                  className="wp-image-13"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_6 et_pb_column_6 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_11 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>Teaching</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_12 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>
                                <span>
                                  Mendidik dengan Iman, Menginspirasi Kehidupan
                                  yang Bermakna
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_image et_pb_image_5">
                            <span className="et_pb_image_wrap">
                              <img
                                decoding="async"
                                width="60"
                                height="18"
                                src="/assets-template/high-school_26.png"
                                alt=""
                                title="high-school_26"
                                className="wp-image-13"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="et_pb_section et_pb_section_1 et_section_regular">
                      <div className="et_pb_row et_pb_row_2 et_pb_equal_columns et_pb_gutters1 et-last-child">
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_7 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_13 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>About {settings.InfoSekolah.Nama}</h2>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_14 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>{settings.InfoSekolah.SekilasInfo}</p>
                            </div>
                          </div>
                          <div className="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_module">
                            <a
                              className="et_pb_button et_pb_button_1 et_pb_bg_layout_light"
                              href=""
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_8 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_image et_pb_image_6 et_pb_image_sticky">
                            <span className="et_pb_image_wrap">
                              <img
                                decoding="async"
                                width="800"
                                height="649"
                                src={settings.About.image}
                                alt=""
                                title="high-school_05"
                                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw"
                                className="wp-image-20"
                              />
                            </span>
                          </div>
                          <div className="et_pb_module et_pb_video et_pb_video_0">
                            <div className="et_pb_video_box">
                              <div
                                className="fluid-width-video-wrapper"
                                style={{ paddingTop: "56.2963%" }}
                              >
                                <iframe
                                  width="560"
                                  height="315"
                                  src={settings.About.video}
                                  title="YouTube video player"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen={true}
                                ></iframe>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_9 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_15 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>school hours</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_16 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>Senin s/d Sabtu : 07.00 – 14.30</p>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_17 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>address</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_18 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>
                                Jalan Seruni No.06 Saleko Kota Bima, Kecamatan
                                Rasanae Barat, Kota Bima, Provinsi Nusa Tenggara
                                Barat
                              </p>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_19 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>Email</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_20 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>info@man1kotabima.sch.id</p>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_21 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>Phone</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_22 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>(0374) 42434</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="et_pb_section et_pb_section_2 et_section_regular">
                      <div className="et_pb_row et_pb_row_3">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_10 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_23 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>Upcoming Events</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_row et_pb_row_4 et-last-child">
                        {settings.Events.map((event, index) => (
                          <div
                            style={{ marginBottom: 40 }}
                            className={`et_pb_column et_pb_column_1_2 et_pb_column_11 et_pb_css_mix_blend_mode_passthrough ${
                              (index + 1) % 2 === 0 ? "et-last-child" : ""
                            }`}
                            key={index}
                          >
                            <div className="et_pb_module et_pb_image et_pb_image_7 et_pb_image_sticky">
                              <span className="et_pb_image_wrap">
                                <img
                                  decoding="async"
                                  width="800"
                                  height="541"
                                  src={event.image}
                                  alt=""
                                  title="high-school_08"
                                  sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw"
                                  className="wp-image-22"
                                />
                              </span>
                            </div>
                            <div className="et_pb_module et_pb_text et_pb_text_24 et_pb_text_align_left et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <h4>{event.title}</h4>
                                <p>{event.text}</p>
                              </div>
                            </div>
                            <div className="et_pb_button_module_wrapper et_pb_button_2_wrapper et_pb_module">
                              <a
                                className="et_pb_button et_pb_button_2 et_pb_bg_layout_light"
                                href={event.link}
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="et_pb_section et_pb_section_3 et_section_regular">
                      <div className="et_pb_row et_pb_row_5">
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_13 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_26 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>School Newsletter</h2>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_14 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_button_module_wrapper et_pb_button_4_wrapper et_pb_button_alignment_right et_pb_module">
                            <a
                              className="et_pb_button et_pb_button_4 et_pb_bg_layout_light"
                              href=""
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_row et_pb_row_6 et_pb_gutters2">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_15 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_with_border et_pb_module et_pb_blog_0 et_pb_blog_grid_wrapper et_pb_bg_layout_light">
                            <div className="et_pb_blog_grid clearfix">
                              <div className="et_pb_ajax_pagination_container">
                                <div
                                  className="et_pb_salvattore_content"
                                  data-columns="3"
                                >
                                  {posts.map((post, index) => (
                                    <div
                                      className="column size-1of3"
                                      key={index}
                                    >
                                      <article
                                        id="post-1"
                                        className="et_pb_post clearfix et_pb_no_thumb et_pb_blog_item_0_0 post-1 post type-post status-publish format-standard hentry category-uncategorized"
                                      >
                                        <h5 className="entry-title">
                                          <Link
                                            as={`/posts/${post.slug}`}
                                            href={`/posts/${post.slug}.html`}
                                            className="hover:underline"
                                          >
                                            {post.title}
                                          </Link>
                                        </h5>

                                        <p className="post-meta">
                                          <span className="published">
                                            {new Date(
                                              post.date
                                            ).toLocaleString()}
                                          </span>
                                        </p>
                                        <div className="post-content">
                                          <div className="post-content-inner">
                                            <p>{post.excerpt}</p>
                                          </div>
                                        </div>
                                      </article>
                                    </div>
                                  ))}
                                  <div className="column size-1of3"></div>
                                  <div className="column size-1of3"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="et_pb_section et_pb_section_4 et_pb_with_background et_section_regular">
                      <div className="et_pb_row et_pb_row_7">
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_16 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_27 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>Visi dan Misi</h2>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_accordion et_pb_accordion_0">
                            <div className="et_pb_toggle et_pb_module et_pb_accordion_item et_pb_accordion_item_0 et_pb_toggle_open">
                              <h4 className="et_pb_toggle_title">
                                Visi {settings.InfoSekolah.Nama}
                              </h4>
                              <div className="et_pb_toggle_content clearfix">
                                <p>{settings.VisiMisi.Visi}</p>
                              </div>
                            </div>
                            <div className="et_pb_toggle et_pb_module et_pb_accordion_item et_pb_accordion_item_0 et_pb_toggle_open">
                              <h4 className="et_pb_toggle_title">
                                Misi {settings.InfoSekolah.Nama}
                              </h4>
                              <div className="et_pb_toggle_content clearfix">
                                <ul>
                                  {settings.VisiMisi.Misi.map((misi, index) => (
                                    <li key={index}>{misi}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_17 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_image et_pb_image_10">
                            <span className="et_pb_image_wrap">
                              <img
                                decoding="async"
                                width="1280"
                                height="1563"
                                src={settings.VisiMisi.image}
                                alt=""
                                title="high-school_11"
                                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1280px, 100vw"
                                className="wp-image-26"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="et_pb_section et_pb_section_5 et_pb_with_background et_section_regular">
                      <div className="et_pb_row et_pb_row_8 et_pb_equal_columns et_pb_gutters1 et_pb_row_4col">
                        <div className="et_pb_column et_pb_column_1_4 et_pb_column_18 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_28 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>school hours</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_29 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              M-F: 8am – 3:30pm
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_4 et_pb_column_19 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_30 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>Address</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_31 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>
                                1234 Divi St. #1000 San Francisco, CA 94220.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_4 et_pb_column_20 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_32 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>Email</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_33 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>
                                <a href="mailto:hello@divihigh.com">
                                  hello@divihigh.com
                                </a>
                                &nbsp;
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_4 et_pb_column_21 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_34 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>Phone</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_35 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              (135)-573-2361
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_row et_pb_row_9 et_pb_row_4col">
                        <div className="et_pb_column et_pb_column_1_4 et_pb_column_22 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_image et_pb_image_11">
                            <span className="et_pb_image_wrap">
                              <img
                                decoding="async"
                                width="64"
                                height="64"
                                src="/assets-template/high-school_16.png"
                                alt=""
                                title="high-school_16"
                                className="wp-image-15"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_4 et_pb_column_23 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_36 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>School</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_37 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>
                                <a href="#">Login</a>
                                <br />
                                <a href="#">Register</a>
                                <br />
                                <a href="#">Gallery</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_4 et_pb_column_24 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_38 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>About</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_39 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <a href="#">Teachers</a>
                              <br />
                              <a href="#">Contact</a>
                              <br />
                              <a href="#">Blog</a>
                              <br />
                              <a href="#">Academics</a>
                              <br />
                              <a href="#">District</a>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_4 et_pb_column_25 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_40 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>Newsletter</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_signup_0 et_pb_newsletter_layout_top_bottom et_pb_newsletter et_pb_subscribe clearfix et_pb_text_align_left et_pb_bg_layout_dark et_pb_no_bg et_pb_newsletter_description_no_title et_pb_newsletter_description_no_content">
                            <div className="et_pb_newsletter_description et_multi_view_hidden"></div>

                            <div className="et_pb_newsletter_form">
                              <form method="post">
                                <div className="et_pb_newsletter_result et_pb_newsletter_error"></div>
                                <div className="et_pb_newsletter_result et_pb_newsletter_success">
                                  <h2>Success!</h2>
                                </div>
                                <div className="et_pb_newsletter_fields">
                                  <p className="et_pb_newsletter_field et_pb_contact_field_last et_pb_contact_field_last_tablet et_pb_contact_field_last_phone">
                                    <label
                                      className="et_pb_contact_form_label"
                                      htmlFor="et_pb_signup_email"
                                      style={{ display: "none" }}
                                    >
                                      Email
                                    </label>
                                    <input
                                      id="et_pb_signup_email"
                                      className="input"
                                      type="text"
                                      placeholder="Email"
                                      name="et_pb_signup_email"
                                    />
                                  </p>

                                  <p className="et_pb_newsletter_button_wrap">
                                    <a
                                      className="et_pb_newsletter_button et_pb_button"
                                      href="#"
                                      data-icon=""
                                    >
                                      <span className="et_subscribe_loader"></span>
                                      <span className="et_pb_newsletter_button_text">
                                        Subscribe
                                      </span>
                                    </a>
                                  </p>
                                </div>

                                <input
                                  type="hidden"
                                  value="mailchimp"
                                  name="et_pb_signup_provider"
                                />
                                <input
                                  type="hidden"
                                  value="1ea2bbd026"
                                  name="et_pb_signup_list_id"
                                />
                                <input
                                  type="hidden"
                                  value="elegantthemestest"
                                  name="et_pb_signup_account_name"
                                />
                                <input
                                  type="hidden"
                                  value="true"
                                  name="et_pb_signup_ip_address"
                                />
                                <input
                                  type="hidden"
                                  value="337f54965339d90adfe88d95b25cccf6"
                                  name="et_pb_signup_checksum"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <link
          rel="stylesheet"
          id="mediaelement-css"
          href="/assets-template/mediaelementplayer-legacy.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wp-mediaelement-css"
          href="/assets-template/wp-mediaelement.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wp-block-library-css"
          href="/assets-template/style.min.css"
          type="text/css"
          media="all"
        />
      </div>
    </>
  );
};

export default EduIndex;
