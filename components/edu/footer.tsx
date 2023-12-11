import { Settings } from "../../settings";

const Footer = ({ settings }: { settings: Settings }) => {
  return (
    <div className="et_pb_section et_pb_section_5 et_pb_with_background et_section_regular">
      <div className="et_pb_row et_pb_row_8 et_pb_equal_columns et_pb_gutters1 et_pb_row_4col">
        <div className="et_pb_column et_pb_column_1_4 et_pb_column_18 et_pb_css_mix_blend_mode_passthrough">
          <div className="et_pb_module et_pb_text et_pb_text_28 et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <h4>school hours</h4>
            </div>
          </div>
          <div className="et_pb_module et_pb_text et_pb_text_29 et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">{settings.InfoSekolah.Email}</div>
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
              <p>{settings.InfoSekolah.Alamat}</p>
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
                <a href={`mailto:${settings.InfoSekolah.Email}`}>
                  {settings.InfoSekolah.Email}
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
              {settings.InfoSekolah.Telepon}
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
                <a href="#">PPDB</a>
                <br />
                <a href="#">RDM</a>
                <br />
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
              <a href="#">Newsletter</a>
              <br />
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
