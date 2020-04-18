import { LitElement, css, html, customElement, property } from 'lit-element';
import { sharedStyles } from '../../shared-styles';

@customElement('kor-icon')
export class korIcon extends LitElement {
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true }) size = 'm';
  @property({ type: String, reflect: true }) color;
  @property({ type: Boolean, reflect: true }) button;
  @property({ type: Boolean, reflect: true }) disabled;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          font-family: 'md-icons';
          line-height: 1;
          -webkit-font-smoothing: auto;
          text-rendering: optimizeLegibility;
          -moz-osx-font-smoothing: grayscale;
          font-feature-settings: 'liga';
          opacity: 0.9;
          color: var(--text-1);
          transition: 0.1s all ease-in-out;
          height: fit-content;
          width: fit-content;
          min-height: fit-content;
          min-width: fit-content;
          overflow: hidden;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
        :host([button]) {
          opacity: 0.6;
          cursor: pointer;
        }
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* size */
        :host([size='xl']) {
          height: 48px;
          width: 48px;
          font-size: 48px;
        }
        :host([size='l']) {
          height: 32px;
          width: 32px;
          font-size: 32px;
        }
        :host([size='m']) {
          height: 24px;
          width: 24px;
          font-size: 24px;
        }
        :host([size='s']) {
          height: 16px;
          width: 16px;
          font-size: 16px;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([button]:hover:not(:active)) {
            opacity: 0.9;
          }
        }
        :host([icon='3d_rotation']):before {
          content: '\\e84d';
        }
        :host([icon='ac_unit']):before {
          content: '\\eb3b';
        }
        :host([icon='access_alarm']):before {
          content: '\\e190';
        }
        :host([icon='access_alarms']):before {
          content: '\\e191';
        }
        :host([icon='access_time']):before {
          content: '\\e192';
        }
        :host([icon='accessibility']):before {
          content: '\\e84e';
        }
        :host([icon='accessible']):before {
          content: '\\e914';
        }
        :host([icon='account_balance']):before {
          content: '\\e84f';
        }
        :host([icon='account_balance_wallet']):before {
          content: '\\e850';
        }
        :host([icon='account_box']):before {
          content: '\\e851';
        }
        :host([icon='account_circle']):before {
          content: '\\e853';
        }
        :host([icon='adb']):before {
          content: '\\e60e';
        }
        :host([icon='add']):before {
          content: '\\e145';
        }
        :host([icon='add_a_photo']):before {
          content: '\\e439';
        }
        :host([icon='add_alarm']):before {
          content: '\\e193';
        }
        :host([icon='add_alert']):before {
          content: '\\e003';
        }
        :host([icon='add_box']):before {
          content: '\\e146';
        }
        :host([icon='add_circle']):before {
          content: '\\e147';
        }
        :host([icon='add_circle_outline']):before {
          content: '\\e148';
        }
        :host([icon='add_location']):before {
          content: '\\e567';
        }
        :host([icon='add_shopping_cart']):before {
          content: '\\e854';
        }
        :host([icon='add_to_photos']):before {
          content: '\\e39d';
        }
        :host([icon='add_to_queue']):before {
          content: '\\e05c';
        }
        :host([icon='adjust']):before {
          content: '\\e39e';
        }
        :host([icon='airline_seat_flat']):before {
          content: '\\e630';
        }
        :host([icon='airline_seat_flat_angled']):before {
          content: '\\e631';
        }
        :host([icon='airline_seat_individual_suite']):before {
          content: '\\e632';
        }
        :host([icon='airline_seat_legroom_extra']):before {
          content: '\\e633';
        }
        :host([icon='airline_seat_legroom_normal']):before {
          content: '\\e634';
        }
        :host([icon='airline_seat_legroom_reduced']):before {
          content: '\\e635';
        }
        :host([icon='airline_seat_recline_extra']):before {
          content: '\\e636';
        }
        :host([icon='airline_seat_recline_normal']):before {
          content: '\\e637';
        }
        :host([icon='airplanemode_active']):before {
          content: '\\e195';
        }
        :host([icon='airplanemode_inactive']):before {
          content: '\\e194';
        }
        :host([icon='airplay']):before {
          content: '\\e055';
        }
        :host([icon='airport_shuttle']):before {
          content: '\\eb3c';
        }
        :host([icon='alarm']):before {
          content: '\\e855';
        }
        :host([icon='alarm_add']):before {
          content: '\\e856';
        }
        :host([icon='alarm_off']):before {
          content: '\\e857';
        }
        :host([icon='alarm_on']):before {
          content: '\\e858';
        }
        :host([icon='album']):before {
          content: '\\e019';
        }
        :host([icon='all_inclusive']):before {
          content: '\\eb3d';
        }
        :host([icon='all_out']):before {
          content: '\\e90b';
        }
        :host([icon='android']):before {
          content: '\\e859';
        }
        :host([icon='announcement']):before {
          content: '\\e85a';
        }
        :host([icon='apps']):before {
          content: '\\e5c3';
        }
        :host([icon='archive']):before {
          content: '\\e149';
        }
        :host([icon='arrow_back']):before {
          content: '\\e5c4';
        }
        :host([icon='arrow_downward']):before {
          content: '\\e5db';
        }
        :host([icon='arrow_drop_down']):before {
          content: '\\e5c5';
        }
        :host([icon='arrow_drop_down_circle']):before {
          content: '\\e5c6';
        }
        :host([icon='arrow_drop_up']):before {
          content: '\\e5c7';
        }
        :host([icon='arrow_forward']):before {
          content: '\\e5c8';
        }
        :host([icon='arrow_upward']):before {
          content: '\\e5d8';
        }
        :host([icon='art_track']):before {
          content: '\\e060';
        }
        :host([icon='aspect_ratio']):before {
          content: '\\e85b';
        }
        :host([icon='assessment']):before {
          content: '\\e85c';
        }
        :host([icon='assignment']):before {
          content: '\\e85d';
        }
        :host([icon='assignment_ind']):before {
          content: '\\e85e';
        }
        :host([icon='assignment_late']):before {
          content: '\\e85f';
        }
        :host([icon='assignment_return']):before {
          content: '\\e860';
        }
        :host([icon='assignment_returned']):before {
          content: '\\e861';
        }
        :host([icon='assignment_turned_in']):before {
          content: '\\e862';
        }
        :host([icon='assistant']):before {
          content: '\\e39f';
        }
        :host([icon='assistant_photo']):before {
          content: '\\e3a0';
        }
        :host([icon='attach_file']):before {
          content: '\\e226';
        }
        :host([icon='attach_money']):before {
          content: '\\e227';
        }
        :host([icon='attachment']):before {
          content: '\\e2bc';
        }
        :host([icon='audiotrack']):before {
          content: '\\e3a1';
        }
        :host([icon='autorenew']):before {
          content: '\\e863';
        }
        :host([icon='av_timer']):before {
          content: '\\e01b';
        }
        :host([icon='backspace']):before {
          content: '\\e14a';
        }
        :host([icon='backup']):before {
          content: '\\e864';
        }
        :host([icon='battery_alert']):before {
          content: '\\e19c';
        }
        :host([icon='battery_charging_full']):before {
          content: '\\e1a3';
        }
        :host([icon='battery_full']):before {
          content: '\\e1a4';
        }
        :host([icon='battery_std']):before {
          content: '\\e1a5';
        }
        :host([icon='battery_unknown']):before {
          content: '\\e1a6';
        }
        :host([icon='beach_access']):before {
          content: '\\eb3e';
        }
        :host([icon='beenhere']):before {
          content: '\\e52d';
        }
        :host([icon='block']):before {
          content: '\\e14b';
        }
        :host([icon='bluetooth']):before {
          content: '\\e1a7';
        }
        :host([icon='bluetooth_audio']):before {
          content: '\\e60f';
        }
        :host([icon='bluetooth_connected']):before {
          content: '\\e1a8';
        }
        :host([icon='bluetooth_disabled']):before {
          content: '\\e1a9';
        }
        :host([icon='bluetooth_searching']):before {
          content: '\\e1aa';
        }
        :host([icon='blur_circular']):before {
          content: '\\e3a2';
        }
        :host([icon='blur_linear']):before {
          content: '\\e3a3';
        }
        :host([icon='blur_off']):before {
          content: '\\e3a4';
        }
        :host([icon='blur_on']):before {
          content: '\\e3a5';
        }
        :host([icon='book']):before {
          content: '\\e865';
        }
        :host([icon='bookmark']):before {
          content: '\\e866';
        }
        :host([icon='bookmark_border']):before {
          content: '\\e867';
        }
        :host([icon='border_all']):before {
          content: '\\e228';
        }
        :host([icon='border_bottom']):before {
          content: '\\e229';
        }
        :host([icon='border_clear']):before {
          content: '\\e22a';
        }
        :host([icon='border_color']):before {
          content: '\\e22b';
        }
        :host([icon='border_horizontal']):before {
          content: '\\e22c';
        }
        :host([icon='border_inner']):before {
          content: '\\e22d';
        }
        :host([icon='border_left']):before {
          content: '\\e22e';
        }
        :host([icon='border_outer']):before {
          content: '\\e22f';
        }
        :host([icon='border_right']):before {
          content: '\\e230';
        }
        :host([icon='border_style']):before {
          content: '\\e231';
        }
        :host([icon='border_top']):before {
          content: '\\e232';
        }
        :host([icon='border_vertical']):before {
          content: '\\e233';
        }
        :host([icon='branding_watermark']):before {
          content: '\\e06b';
        }
        :host([icon='brightness_1']):before {
          content: '\\e3a6';
        }
        :host([icon='brightness_2']):before {
          content: '\\e3a7';
        }
        :host([icon='brightness_3']):before {
          content: '\\e3a8';
        }
        :host([icon='brightness_4']):before {
          content: '\\e3a9';
        }
        :host([icon='brightness_5']):before {
          content: '\\e3aa';
        }
        :host([icon='brightness_6']):before {
          content: '\\e3ab';
        }
        :host([icon='brightness_7']):before {
          content: '\\e3ac';
        }
        :host([icon='brightness_auto']):before {
          content: '\\e1ab';
        }
        :host([icon='brightness_high']):before {
          content: '\\e1ac';
        }
        :host([icon='brightness_low']):before {
          content: '\\e1ad';
        }
        :host([icon='brightness_medium']):before {
          content: '\\e1ae';
        }
        :host([icon='broken_image']):before {
          content: '\\e3ad';
        }
        :host([icon='brush']):before {
          content: '\\e3ae';
        }
        :host([icon='bubble_chart']):before {
          content: '\\e6dd';
        }
        :host([icon='bug_report']):before {
          content: '\\e868';
        }
        :host([icon='build']):before {
          content: '\\e869';
        }
        :host([icon='burst_mode']):before {
          content: '\\e43c';
        }
        :host([icon='business']):before {
          content: '\\e0af';
        }
        :host([icon='business_center']):before {
          content: '\\eb3f';
        }
        :host([icon='cached']):before {
          content: '\\e86a';
        }
        :host([icon='cake']):before {
          content: '\\e7e9';
        }
        :host([icon='call']):before {
          content: '\\e0b0';
        }
        :host([icon='call_end']):before {
          content: '\\e0b1';
        }
        :host([icon='call_made']):before {
          content: '\\e0b2';
        }
        :host([icon='call_merge']):before {
          content: '\\e0b3';
        }
        :host([icon='call_missed']):before {
          content: '\\e0b4';
        }
        :host([icon='call_missed_outgoing']):before {
          content: '\\e0e4';
        }
        :host([icon='call_received']):before {
          content: '\\e0b5';
        }
        :host([icon='call_split']):before {
          content: '\\e0b6';
        }
        :host([icon='call_to_action']):before {
          content: '\\e06c';
        }
        :host([icon='camera']):before {
          content: '\\e3af';
        }
        :host([icon='camera_alt']):before {
          content: '\\e3b0';
        }
        :host([icon='camera_enhance']):before {
          content: '\\e8fc';
        }
        :host([icon='camera_front']):before {
          content: '\\e3b1';
        }
        :host([icon='camera_rear']):before {
          content: '\\e3b2';
        }
        :host([icon='camera_roll']):before {
          content: '\\e3b3';
        }
        :host([icon='cancel']):before {
          content: '\\e5c9';
        }
        :host([icon='card_giftcard']):before {
          content: '\\e8f6';
        }
        :host([icon='card_membership']):before {
          content: '\\e8f7';
        }
        :host([icon='card_travel']):before {
          content: '\\e8f8';
        }
        :host([icon='casino']):before {
          content: '\\eb40';
        }
        :host([icon='cast']):before {
          content: '\\e307';
        }
        :host([icon='cast_connected']):before {
          content: '\\e308';
        }
        :host([icon='center_focus_strong']):before {
          content: '\\e3b4';
        }
        :host([icon='center_focus_weak']):before {
          content: '\\e3b5';
        }
        :host([icon='change_history']):before {
          content: '\\e86b';
        }
        :host([icon='chat']):before {
          content: '\\e0b7';
        }
        :host([icon='chat_bubble']):before {
          content: '\\e0ca';
        }
        :host([icon='chat_bubble_outline']):before {
          content: '\\e0cb';
        }
        :host([icon='check']):before {
          content: '\\e5ca';
        }
        :host([icon='check_box']):before {
          content: '\\e834';
        }
        :host([icon='check_box_outline_blank']):before {
          content: '\\e835';
        }
        :host([icon='check_circle']):before {
          content: '\\e86c';
        }
        :host([icon='chevron_left']):before {
          content: '\\e5cb';
        }
        :host([icon='chevron_right']):before {
          content: '\\e5cc';
        }
        :host([icon='child_care']):before {
          content: '\\eb41';
        }
        :host([icon='child_friendly']):before {
          content: '\\eb42';
        }
        :host([icon='chrome_reader_mode']):before {
          content: '\\e86d';
        }
        :host([icon='class']):before {
          content: '\\e86e';
        }
        :host([icon='clear']):before {
          content: '\\e14c';
        }
        :host([icon='clear_all']):before {
          content: '\\e0b8';
        }
        :host([icon='close']):before {
          content: '\\e5cd';
        }
        :host([icon='closed_caption']):before {
          content: '\\e01c';
        }
        :host([icon='cloud']):before {
          content: '\\e2bd';
        }
        :host([icon='cloud_circle']):before {
          content: '\\e2be';
        }
        :host([icon='cloud_done']):before {
          content: '\\e2bf';
        }
        :host([icon='cloud_download']):before {
          content: '\\e2c0';
        }
        :host([icon='cloud_off']):before {
          content: '\\e2c1';
        }
        :host([icon='cloud_queue']):before {
          content: '\\e2c2';
        }
        :host([icon='cloud_upload']):before {
          content: '\\e2c3';
        }
        :host([icon='code']):before {
          content: '\\e86f';
        }
        :host([icon='collections']):before {
          content: '\\e3b6';
        }
        :host([icon='collections_bookmark']):before {
          content: '\\e431';
        }
        :host([icon='color_lens']):before {
          content: '\\e3b7';
        }
        :host([icon='colorize']):before {
          content: '\\e3b8';
        }
        :host([icon='comment']):before {
          content: '\\e0b9';
        }
        :host([icon='compare']):before {
          content: '\\e3b9';
        }
        :host([icon='compare_arrows']):before {
          content: '\\e915';
        }
        :host([icon='computer']):before {
          content: '\\e30a';
        }
        :host([icon='confirmation_number']):before {
          content: '\\e638';
        }
        :host([icon='contact_mail']):before {
          content: '\\e0d0';
        }
        :host([icon='contact_phone']):before {
          content: '\\e0cf';
        }
        :host([icon='contacts']):before {
          content: '\\e0ba';
        }
        :host([icon='content_copy']):before {
          content: '\\e14d';
        }
        :host([icon='content_cut']):before {
          content: '\\e14e';
        }
        :host([icon='content_paste']):before {
          content: '\\e14f';
        }
        :host([icon='control_point']):before {
          content: '\\e3ba';
        }
        :host([icon='control_point_duplicate']):before {
          content: '\\e3bb';
        }
        :host([icon='copyright']):before {
          content: '\\e90c';
        }
        :host([icon='create']):before {
          content: '\\e150';
        }
        :host([icon='create_new_folder']):before {
          content: '\\e2cc';
        }
        :host([icon='credit_card']):before {
          content: '\\e870';
        }
        :host([icon='crop']):before {
          content: '\\e3be';
        }
        :host([icon='crop_16_9']):before {
          content: '\\e3bc';
        }
        :host([icon='crop_3_2']):before {
          content: '\\e3bd';
        }
        :host([icon='crop_5_4']):before {
          content: '\\e3bf';
        }
        :host([icon='crop_7_5']):before {
          content: '\\e3c0';
        }
        :host([icon='crop_din']):before {
          content: '\\e3c1';
        }
        :host([icon='crop_free']):before {
          content: '\\e3c2';
        }
        :host([icon='crop_landscape']):before {
          content: '\\e3c3';
        }
        :host([icon='crop_original']):before {
          content: '\\e3c4';
        }
        :host([icon='crop_portrait']):before {
          content: '\\e3c5';
        }
        :host([icon='crop_rotate']):before {
          content: '\\e437';
        }
        :host([icon='crop_square']):before {
          content: '\\e3c6';
        }
        :host([icon='dashboard']):before {
          content: '\\e871';
        }
        :host([icon='data_usage']):before {
          content: '\\e1af';
        }
        :host([icon='date_range']):before {
          content: '\\e916';
        }
        :host([icon='dehaze']):before {
          content: '\\e3c7';
        }
        :host([icon='delete']):before {
          content: '\\e872';
        }
        :host([icon='delete_forever']):before {
          content: '\\e92b';
        }
        :host([icon='delete_sweep']):before {
          content: '\\e16c';
        }
        :host([icon='description']):before {
          content: '\\e873';
        }
        :host([icon='desktop_mac']):before {
          content: '\\e30b';
        }
        :host([icon='desktop_windows']):before {
          content: '\\e30c';
        }
        :host([icon='details']):before {
          content: '\\e3c8';
        }
        :host([icon='developer_board']):before {
          content: '\\e30d';
        }
        :host([icon='developer_mode']):before {
          content: '\\e1b0';
        }
        :host([icon='device_hub']):before {
          content: '\\e335';
        }
        :host([icon='devices']):before {
          content: '\\e1b1';
        }
        :host([icon='devices_other']):before {
          content: '\\e337';
        }
        :host([icon='dialer_sip']):before {
          content: '\\e0bb';
        }
        :host([icon='dialpad']):before {
          content: '\\e0bc';
        }
        :host([icon='directions']):before {
          content: '\\e52e';
        }
        :host([icon='directions_bike']):before {
          content: '\\e52f';
        }
        :host([icon='directions_boat']):before {
          content: '\\e532';
        }
        :host([icon='directions_bus']):before {
          content: '\\e530';
        }
        :host([icon='directions_car']):before {
          content: '\\e531';
        }
        :host([icon='directions_railway']):before {
          content: '\\e534';
        }
        :host([icon='directions_run']):before {
          content: '\\e566';
        }
        :host([icon='directions_subway']):before {
          content: '\\e533';
        }
        :host([icon='directions_transit']):before {
          content: '\\e535';
        }
        :host([icon='directions_walk']):before {
          content: '\\e536';
        }
        :host([icon='disc_full']):before {
          content: '\\e610';
        }
        :host([icon='dns']):before {
          content: '\\e875';
        }
        :host([icon='do_not_disturb']):before {
          content: '\\e612';
        }
        :host([icon='do_not_disturb_alt']):before {
          content: '\\e611';
        }
        :host([icon='do_not_disturb_off']):before {
          content: '\\e643';
        }
        :host([icon='do_not_disturb_on']):before {
          content: '\\e644';
        }
        :host([icon='dock']):before {
          content: '\\e30e';
        }
        :host([icon='domain']):before {
          content: '\\e7ee';
        }
        :host([icon='done']):before {
          content: '\\e876';
        }
        :host([icon='done_all']):before {
          content: '\\e877';
        }
        :host([icon='donut_large']):before {
          content: '\\e917';
        }
        :host([icon='donut_small']):before {
          content: '\\e918';
        }
        :host([icon='drafts']):before {
          content: '\\e151';
        }
        :host([icon='drag_handle']):before {
          content: '\\e25d';
        }
        :host([icon='drive_eta']):before {
          content: '\\e613';
        }
        :host([icon='dvr']):before {
          content: '\\e1b2';
        }
        :host([icon='edit']):before {
          content: '\\e3c9';
        }
        :host([icon='edit_location']):before {
          content: '\\e568';
        }
        :host([icon='eject']):before {
          content: '\\e8fb';
        }
        :host([icon='email']):before {
          content: '\\e0be';
        }
        :host([icon='enhanced_encryption']):before {
          content: '\\e63f';
        }
        :host([icon='equalizer']):before {
          content: '\\e01d';
        }
        :host([icon='error']):before {
          content: '\\e000';
        }
        :host([icon='error_outline']):before {
          content: '\\e001';
        }
        :host([icon='euro_symbol']):before {
          content: '\\e926';
        }
        :host([icon='ev_station']):before {
          content: '\\e56d';
        }
        :host([icon='event']):before {
          content: '\\e878';
        }
        :host([icon='event_available']):before {
          content: '\\e614';
        }
        :host([icon='event_busy']):before {
          content: '\\e615';
        }
        :host([icon='event_note']):before {
          content: '\\e616';
        }
        :host([icon='event_seat']):before {
          content: '\\e903';
        }
        :host([icon='exit_to_app']):before {
          content: '\\e879';
        }
        :host([icon='expand_less']):before {
          content: '\\e5ce';
        }
        :host([icon='expand_more']):before {
          content: '\\e5cf';
        }
        :host([icon='explicit']):before {
          content: '\\e01e';
        }
        :host([icon='explore']):before {
          content: '\\e87a';
        }
        :host([icon='exposure']):before {
          content: '\\e3ca';
        }
        :host([icon='exposure_neg_1']):before {
          content: '\\e3cb';
        }
        :host([icon='exposure_neg_2']):before {
          content: '\\e3cc';
        }
        :host([icon='exposure_plus_1']):before {
          content: '\\e3cd';
        }
        :host([icon='exposure_plus_2']):before {
          content: '\\e3ce';
        }
        :host([icon='exposure_zero']):before {
          content: '\\e3cf';
        }
        :host([icon='extension']):before {
          content: '\\e87b';
        }
        :host([icon='face']):before {
          content: '\\e87c';
        }
        :host([icon='fast_forward']):before {
          content: '\\e01f';
        }
        :host([icon='fast_rewind']):before {
          content: '\\e020';
        }
        :host([icon='favorite']):before {
          content: '\\e87d';
        }
        :host([icon='favorite_border']):before {
          content: '\\e87e';
        }
        :host([icon='featured_play_list']):before {
          content: '\\e06d';
        }
        :host([icon='featured_video']):before {
          content: '\\e06e';
        }
        :host([icon='feedback']):before {
          content: '\\e87f';
        }
        :host([icon='fiber_dvr']):before {
          content: '\\e05d';
        }
        :host([icon='fiber_manual_record']):before {
          content: '\\e061';
        }
        :host([icon='fiber_new']):before {
          content: '\\e05e';
        }
        :host([icon='fiber_pin']):before {
          content: '\\e06a';
        }
        :host([icon='fiber_smart_record']):before {
          content: '\\e062';
        }
        :host([icon='file_download']):before {
          content: '\\e2c4';
        }
        :host([icon='file_upload']):before {
          content: '\\e2c6';
        }
        :host([icon='filter']):before {
          content: '\\e3d3';
        }
        :host([icon='filter_1']):before {
          content: '\\e3d0';
        }
        :host([icon='filter_2']):before {
          content: '\\e3d1';
        }
        :host([icon='filter_3']):before {
          content: '\\e3d2';
        }
        :host([icon='filter_4']):before {
          content: '\\e3d4';
        }
        :host([icon='filter_5']):before {
          content: '\\e3d5';
        }
        :host([icon='filter_6']):before {
          content: '\\e3d6';
        }
        :host([icon='filter_7']):before {
          content: '\\e3d7';
        }
        :host([icon='filter_8']):before {
          content: '\\e3d8';
        }
        :host([icon='filter_9']):before {
          content: '\\e3d9';
        }
        :host([icon='filter_9_plus']):before {
          content: '\\e3da';
        }
        :host([icon='filter_b_and_w']):before {
          content: '\\e3db';
        }
        :host([icon='filter_center_focus']):before {
          content: '\\e3dc';
        }
        :host([icon='filter_drama']):before {
          content: '\\e3dd';
        }
        :host([icon='filter_frames']):before {
          content: '\\e3de';
        }
        :host([icon='filter_hdr']):before {
          content: '\\e3df';
        }
        :host([icon='filter_list']):before {
          content: '\\e152';
        }
        :host([icon='filter_none']):before {
          content: '\\e3e0';
        }
        :host([icon='filter_tilt_shift']):before {
          content: '\\e3e2';
        }
        :host([icon='filter_vintage']):before {
          content: '\\e3e3';
        }
        :host([icon='find_in_page']):before {
          content: '\\e880';
        }
        :host([icon='find_replace']):before {
          content: '\\e881';
        }
        :host([icon='fingerprint']):before {
          content: '\\e90d';
        }
        :host([icon='first_page']):before {
          content: '\\e5dc';
        }
        :host([icon='fitness_center']):before {
          content: '\\eb43';
        }
        :host([icon='flag']):before {
          content: '\\e153';
        }
        :host([icon='flare']):before {
          content: '\\e3e4';
        }
        :host([icon='flash_auto']):before {
          content: '\\e3e5';
        }
        :host([icon='flash_off']):before {
          content: '\\e3e6';
        }
        :host([icon='flash_on']):before {
          content: '\\e3e7';
        }
        :host([icon='flight']):before {
          content: '\\e539';
        }
        :host([icon='flight_land']):before {
          content: '\\e904';
        }
        :host([icon='flight_takeoff']):before {
          content: '\\e905';
        }
        :host([icon='flip']):before {
          content: '\\e3e8';
        }
        :host([icon='flip_to_back']):before {
          content: '\\e882';
        }
        :host([icon='flip_to_front']):before {
          content: '\\e883';
        }
        :host([icon='folder']):before {
          content: '\\e2c7';
        }
        :host([icon='folder_open']):before {
          content: '\\e2c8';
        }
        :host([icon='folder_shared']):before {
          content: '\\e2c9';
        }
        :host([icon='folder_special']):before {
          content: '\\e617';
        }
        :host([icon='font_download']):before {
          content: '\\e167';
        }
        :host([icon='format_align_center']):before {
          content: '\\e234';
        }
        :host([icon='format_align_justify']):before {
          content: '\\e235';
        }
        :host([icon='format_align_left']):before {
          content: '\\e236';
        }
        :host([icon='format_align_right']):before {
          content: '\\e237';
        }
        :host([icon='format_bold']):before {
          content: '\\e238';
        }
        :host([icon='format_clear']):before {
          content: '\\e239';
        }
        :host([icon='format_color_fill']):before {
          content: '\\e23a';
        }
        :host([icon='format_color_reset']):before {
          content: '\\e23b';
        }
        :host([icon='format_color_text']):before {
          content: '\\e23c';
        }
        :host([icon='format_indent_decrease']):before {
          content: '\\e23d';
        }
        :host([icon='format_indent_increase']):before {
          content: '\\e23e';
        }
        :host([icon='format_italic']):before {
          content: '\\e23f';
        }
        :host([icon='format_line_spacing']):before {
          content: '\\e240';
        }
        :host([icon='format_list_bulleted']):before {
          content: '\\e241';
        }
        :host([icon='format_list_numbered']):before {
          content: '\\e242';
        }
        :host([icon='format_paint']):before {
          content: '\\e243';
        }
        :host([icon='format_quote']):before {
          content: '\\e244';
        }
        :host([icon='format_shapes']):before {
          content: '\\e25e';
        }
        :host([icon='format_size']):before {
          content: '\\e245';
        }
        :host([icon='format_strikethrough']):before {
          content: '\\e246';
        }
        :host([icon='format_textdirection_l_to_r']):before {
          content: '\\e247';
        }
        :host([icon='format_textdirection_r_to_l']):before {
          content: '\\e248';
        }
        :host([icon='format_underlined']):before {
          content: '\\e249';
        }
        :host([icon='forum']):before {
          content: '\\e0bf';
        }
        :host([icon='forward']):before {
          content: '\\e154';
        }
        :host([icon='forward_10']):before {
          content: '\\e056';
        }
        :host([icon='forward_30']):before {
          content: '\\e057';
        }
        :host([icon='forward_5']):before {
          content: '\\e058';
        }
        :host([icon='free_breakfast']):before {
          content: '\\eb44';
        }
        :host([icon='fullscreen']):before {
          content: '\\e5d0';
        }
        :host([icon='fullscreen_exit']):before {
          content: '\\e5d1';
        }
        :host([icon='functions']):before {
          content: '\\e24a';
        }
        :host([icon='g_translate']):before {
          content: '\\e927';
        }
        :host([icon='gamepad']):before {
          content: '\\e30f';
        }
        :host([icon='games']):before {
          content: '\\e021';
        }
        :host([icon='gavel']):before {
          content: '\\e90e';
        }
        :host([icon='gesture']):before {
          content: '\\e155';
        }
        :host([icon='get_app']):before {
          content: '\\e884';
        }
        :host([icon='gif']):before {
          content: '\\e908';
        }
        :host([icon='golf_course']):before {
          content: '\\eb45';
        }
        :host([icon='gps_fixed']):before {
          content: '\\e1b3';
        }
        :host([icon='gps_not_fixed']):before {
          content: '\\e1b4';
        }
        :host([icon='gps_off']):before {
          content: '\\e1b5';
        }
        :host([icon='grade']):before {
          content: '\\e885';
        }
        :host([icon='gradient']):before {
          content: '\\e3e9';
        }
        :host([icon='grain']):before {
          content: '\\e3ea';
        }
        :host([icon='graphic_eq']):before {
          content: '\\e1b8';
        }
        :host([icon='grid_off']):before {
          content: '\\e3eb';
        }
        :host([icon='grid_on']):before {
          content: '\\e3ec';
        }
        :host([icon='group']):before {
          content: '\\e7ef';
        }
        :host([icon='group_add']):before {
          content: '\\e7f0';
        }
        :host([icon='group_work']):before {
          content: '\\e886';
        }
        :host([icon='hd']):before {
          content: '\\e052';
        }
        :host([icon='hdr_off']):before {
          content: '\\e3ed';
        }
        :host([icon='hdr_on']):before {
          content: '\\e3ee';
        }
        :host([icon='hdr_strong']):before {
          content: '\\e3f1';
        }
        :host([icon='hdr_weak']):before {
          content: '\\e3f2';
        }
        :host([icon='headset']):before {
          content: '\\e310';
        }
        :host([icon='headset_mic']):before {
          content: '\\e311';
        }
        :host([icon='healing']):before {
          content: '\\e3f3';
        }
        :host([icon='hearing']):before {
          content: '\\e023';
        }
        :host([icon='help']):before {
          content: '\\e887';
        }
        :host([icon='help_outline']):before {
          content: '\\e8fd';
        }
        :host([icon='high_quality']):before {
          content: '\\e024';
        }
        :host([icon='highlight']):before {
          content: '\\e25f';
        }
        :host([icon='highlight_off']):before {
          content: '\\e888';
        }
        :host([icon='history']):before {
          content: '\\e889';
        }
        :host([icon='home']):before {
          content: '\\e88a';
        }
        :host([icon='hot_tub']):before {
          content: '\\eb46';
        }
        :host([icon='hotel']):before {
          content: '\\e53a';
        }
        :host([icon='hourglass_empty']):before {
          content: '\\e88b';
        }
        :host([icon='hourglass_full']):before {
          content: '\\e88c';
        }
        :host([icon='http']):before {
          content: '\\e902';
        }
        :host([icon='https']):before {
          content: '\\e88d';
        }
        :host([icon='image']):before {
          content: '\\e3f4';
        }
        :host([icon='image_aspect_ratio']):before {
          content: '\\e3f5';
        }
        :host([icon='import_contacts']):before {
          content: '\\e0e0';
        }
        :host([icon='import_export']):before {
          content: '\\e0c3';
        }
        :host([icon='important_devices']):before {
          content: '\\e912';
        }
        :host([icon='inbox']):before {
          content: '\\e156';
        }
        :host([icon='indeterminate_check_box']):before {
          content: '\\e909';
        }
        :host([icon='info']):before {
          content: '\\e88e';
        }
        :host([icon='info_outline']):before {
          content: '\\e88f';
        }
        :host([icon='input']):before {
          content: '\\e890';
        }
        :host([icon='insert_chart']):before {
          content: '\\e24b';
        }
        :host([icon='insert_comment']):before {
          content: '\\e24c';
        }
        :host([icon='insert_drive_file']):before {
          content: '\\e24d';
        }
        :host([icon='insert_emoticon']):before {
          content: '\\e24e';
        }
        :host([icon='insert_invitation']):before {
          content: '\\e24f';
        }
        :host([icon='insert_link']):before {
          content: '\\e250';
        }
        :host([icon='insert_photo']):before {
          content: '\\e251';
        }
        :host([icon='invert_colors']):before {
          content: '\\e891';
        }
        :host([icon='invert_colors_off']):before {
          content: '\\e0c4';
        }
        :host([icon='iso']):before {
          content: '\\e3f6';
        }
        :host([icon='keyboard']):before {
          content: '\\e312';
        }
        :host([icon='keyboard_arrow_down']):before {
          content: '\\e313';
        }
        :host([icon='keyboard_arrow_left']):before {
          content: '\\e314';
        }
        :host([icon='keyboard_arrow_right']):before {
          content: '\\e315';
        }
        :host([icon='keyboard_arrow_up']):before {
          content: '\\e316';
        }
        :host([icon='keyboard_backspace']):before {
          content: '\\e317';
        }
        :host([icon='keyboard_capslock']):before {
          content: '\\e318';
        }
        :host([icon='keyboard_hide']):before {
          content: '\\e31a';
        }
        :host([icon='keyboard_return']):before {
          content: '\\e31b';
        }
        :host([icon='keyboard_tab']):before {
          content: '\\e31c';
        }
        :host([icon='keyboard_voice']):before {
          content: '\\e31d';
        }
        :host([icon='kitchen']):before {
          content: '\\eb47';
        }
        :host([icon='label']):before {
          content: '\\e892';
        }
        :host([icon='label_outline']):before {
          content: '\\e893';
        }
        :host([icon='landscape']):before {
          content: '\\e3f7';
        }
        :host([icon='language']):before {
          content: '\\e894';
        }
        :host([icon='laptop']):before {
          content: '\\e31e';
        }
        :host([icon='laptop_chromebook']):before {
          content: '\\e31f';
        }
        :host([icon='laptop_mac']):before {
          content: '\\e320';
        }
        :host([icon='laptop_windows']):before {
          content: '\\e321';
        }
        :host([icon='last_page']):before {
          content: '\\e5dd';
        }
        :host([icon='launch']):before {
          content: '\\e895';
        }
        :host([icon='layers']):before {
          content: '\\e53b';
        }
        :host([icon='layers_clear']):before {
          content: '\\e53c';
        }
        :host([icon='leak_add']):before {
          content: '\\e3f8';
        }
        :host([icon='leak_remove']):before {
          content: '\\e3f9';
        }
        :host([icon='lens']):before {
          content: '\\e3fa';
        }
        :host([icon='library_add']):before {
          content: '\\e02e';
        }
        :host([icon='library_books']):before {
          content: '\\e02f';
        }
        :host([icon='library_music']):before {
          content: '\\e030';
        }
        :host([icon='lightbulb_outline']):before {
          content: '\\e90f';
        }
        :host([icon='line_style']):before {
          content: '\\e919';
        }
        :host([icon='line_weight']):before {
          content: '\\e91a';
        }
        :host([icon='linear_scale']):before {
          content: '\\e260';
        }
        :host([icon='link']):before {
          content: '\\e157';
        }
        :host([icon='linked_camera']):before {
          content: '\\e438';
        }
        :host([icon='list']):before {
          content: '\\e896';
        }
        :host([icon='live_help']):before {
          content: '\\e0c6';
        }
        :host([icon='live_tv']):before {
          content: '\\e639';
        }
        :host([icon='local_activity']):before {
          content: '\\e53f';
        }
        :host([icon='local_airport']):before {
          content: '\\e53d';
        }
        :host([icon='local_atm']):before {
          content: '\\e53e';
        }
        :host([icon='local_bar']):before {
          content: '\\e540';
        }
        :host([icon='local_cafe']):before {
          content: '\\e541';
        }
        :host([icon='local_car_wash']):before {
          content: '\\e542';
        }
        :host([icon='local_convenience_store']):before {
          content: '\\e543';
        }
        :host([icon='local_dining']):before {
          content: '\\e556';
        }
        :host([icon='local_drink']):before {
          content: '\\e544';
        }
        :host([icon='local_florist']):before {
          content: '\\e545';
        }
        :host([icon='local_gas_station']):before {
          content: '\\e546';
        }
        :host([icon='local_grocery_store']):before {
          content: '\\e547';
        }
        :host([icon='local_hospital']):before {
          content: '\\e548';
        }
        :host([icon='local_hotel']):before {
          content: '\\e549';
        }
        :host([icon='local_laundry_service']):before {
          content: '\\e54a';
        }
        :host([icon='local_library']):before {
          content: '\\e54b';
        }
        :host([icon='local_mall']):before {
          content: '\\e54c';
        }
        :host([icon='local_movies']):before {
          content: '\\e54d';
        }
        :host([icon='local_offer']):before {
          content: '\\e54e';
        }
        :host([icon='local_parking']):before {
          content: '\\e54f';
        }
        :host([icon='local_pharmacy']):before {
          content: '\\e550';
        }
        :host([icon='local_phone']):before {
          content: '\\e551';
        }
        :host([icon='local_pizza']):before {
          content: '\\e552';
        }
        :host([icon='local_play']):before {
          content: '\\e553';
        }
        :host([icon='local_post_office']):before {
          content: '\\e554';
        }
        :host([icon='local_printshop']):before {
          content: '\\e555';
        }
        :host([icon='local_see']):before {
          content: '\\e557';
        }
        :host([icon='local_shipping']):before {
          content: '\\e558';
        }
        :host([icon='local_taxi']):before {
          content: '\\e559';
        }
        :host([icon='location_city']):before {
          content: '\\e7f1';
        }
        :host([icon='location_disabled']):before {
          content: '\\e1b6';
        }
        :host([icon='location_off']):before {
          content: '\\e0c7';
        }
        :host([icon='location_on']):before {
          content: '\\e0c8';
        }
        :host([icon='location_searching']):before {
          content: '\\e1b7';
        }
        :host([icon='lock']):before {
          content: '\\e897';
        }
        :host([icon='lock_open']):before {
          content: '\\e898';
        }
        :host([icon='lock_outline']):before {
          content: '\\e899';
        }
        :host([icon='looks']):before {
          content: '\\e3fc';
        }
        :host([icon='looks_3']):before {
          content: '\\e3fb';
        }
        :host([icon='looks_4']):before {
          content: '\\e3fd';
        }
        :host([icon='looks_5']):before {
          content: '\\e3fe';
        }
        :host([icon='looks_6']):before {
          content: '\\e3ff';
        }
        :host([icon='looks_one']):before {
          content: '\\e400';
        }
        :host([icon='looks_two']):before {
          content: '\\e401';
        }
        :host([icon='loop']):before {
          content: '\\e028';
        }
        :host([icon='loupe']):before {
          content: '\\e402';
        }
        :host([icon='low_priority']):before {
          content: '\\e16d';
        }
        :host([icon='loyalty']):before {
          content: '\\e89a';
        }
        :host([icon='mail']):before {
          content: '\\e158';
        }
        :host([icon='mail_outline']):before {
          content: '\\e0e1';
        }
        :host([icon='map']):before {
          content: '\\e55b';
        }
        :host([icon='markunread']):before {
          content: '\\e159';
        }
        :host([icon='markunread_mailbox']):before {
          content: '\\e89b';
        }
        :host([icon='memory']):before {
          content: '\\e322';
        }
        :host([icon='menu']):before {
          content: '\\e5d2';
        }
        :host([icon='merge_type']):before {
          content: '\\e252';
        }
        :host([icon='message']):before {
          content: '\\e0c9';
        }
        :host([icon='mic']):before {
          content: '\\e029';
        }
        :host([icon='mic_none']):before {
          content: '\\e02a';
        }
        :host([icon='mic_off']):before {
          content: '\\e02b';
        }
        :host([icon='mms']):before {
          content: '\\e618';
        }
        :host([icon='mode_comment']):before {
          content: '\\e253';
        }
        :host([icon='mode_edit']):before {
          content: '\\e254';
        }
        :host([icon='monetization_on']):before {
          content: '\\e263';
        }
        :host([icon='money_off']):before {
          content: '\\e25c';
        }
        :host([icon='monochrome_photos']):before {
          content: '\\e403';
        }
        :host([icon='mood']):before {
          content: '\\e7f2';
        }
        :host([icon='mood_bad']):before {
          content: '\\e7f3';
        }
        :host([icon='more']):before {
          content: '\\e619';
        }
        :host([icon='more_horiz']):before {
          content: '\\e5d3';
        }
        :host([icon='more_vert']):before {
          content: '\\e5d4';
        }
        :host([icon='motorcycle']):before {
          content: '\\e91b';
        }
        :host([icon='mouse']):before {
          content: '\\e323';
        }
        :host([icon='move_to_inbox']):before {
          content: '\\e168';
        }
        :host([icon='movie']):before {
          content: '\\e02c';
        }
        :host([icon='movie_creation']):before {
          content: '\\e404';
        }
        :host([icon='movie_filter']):before {
          content: '\\e43a';
        }
        :host([icon='multiline_chart']):before {
          content: '\\e6df';
        }
        :host([icon='music_note']):before {
          content: '\\e405';
        }
        :host([icon='music_video']):before {
          content: '\\e063';
        }
        :host([icon='my_location']):before {
          content: '\\e55c';
        }
        :host([icon='nature']):before {
          content: '\\e406';
        }
        :host([icon='nature_people']):before {
          content: '\\e407';
        }
        :host([icon='navigate_before']):before {
          content: '\\e408';
        }
        :host([icon='navigate_next']):before {
          content: '\\e409';
        }
        :host([icon='navigation']):before {
          content: '\\e55d';
        }
        :host([icon='near_me']):before {
          content: '\\e569';
        }
        :host([icon='network_cell']):before {
          content: '\\e1b9';
        }
        :host([icon='network_check']):before {
          content: '\\e640';
        }
        :host([icon='network_locked']):before {
          content: '\\e61a';
        }
        :host([icon='network_wifi']):before {
          content: '\\e1ba';
        }
        :host([icon='new_releases']):before {
          content: '\\e031';
        }
        :host([icon='next_week']):before {
          content: '\\e16a';
        }
        :host([icon='nfc']):before {
          content: '\\e1bb';
        }
        :host([icon='no_encryption']):before {
          content: '\\e641';
        }
        :host([icon='no_sim']):before {
          content: '\\e0cc';
        }
        :host([icon='not_interested']):before {
          content: '\\e033';
        }
        :host([icon='note']):before {
          content: '\\e06f';
        }
        :host([icon='note_add']):before {
          content: '\\e89c';
        }
        :host([icon='notifications']):before {
          content: '\\e7f4';
        }
        :host([icon='notifications_active']):before {
          content: '\\e7f7';
        }
        :host([icon='notifications_none']):before {
          content: '\\e7f5';
        }
        :host([icon='notifications_off']):before {
          content: '\\e7f6';
        }
        :host([icon='notifications_paused']):before {
          content: '\\e7f8';
        }
        :host([icon='offline_pin']):before {
          content: '\\e90a';
        }
        :host([icon='ondemand_video']):before {
          content: '\\e63a';
        }
        :host([icon='opacity']):before {
          content: '\\e91c';
        }
        :host([icon='open_in_browser']):before {
          content: '\\e89d';
        }
        :host([icon='open_in_new']):before {
          content: '\\e89e';
        }
        :host([icon='open_with']):before {
          content: '\\e89f';
        }
        :host([icon='pages']):before {
          content: '\\e7f9';
        }
        :host([icon='pageview']):before {
          content: '\\e8a0';
        }
        :host([icon='palette']):before {
          content: '\\e40a';
        }
        :host([icon='pan_tool']):before {
          content: '\\e925';
        }
        :host([icon='panorama']):before {
          content: '\\e40b';
        }
        :host([icon='panorama_fish_eye']):before {
          content: '\\e40c';
        }
        :host([icon='panorama_horizontal']):before {
          content: '\\e40d';
        }
        :host([icon='panorama_vertical']):before {
          content: '\\e40e';
        }
        :host([icon='panorama_wide_angle']):before {
          content: '\\e40f';
        }
        :host([icon='party_mode']):before {
          content: '\\e7fa';
        }
        :host([icon='pause']):before {
          content: '\\e034';
        }
        :host([icon='pause_circle_filled']):before {
          content: '\\e035';
        }
        :host([icon='pause_circle_outline']):before {
          content: '\\e036';
        }
        :host([icon='payment']):before {
          content: '\\e8a1';
        }
        :host([icon='people']):before {
          content: '\\e7fb';
        }
        :host([icon='people_outline']):before {
          content: '\\e7fc';
        }
        :host([icon='perm_camera_mic']):before {
          content: '\\e8a2';
        }
        :host([icon='perm_contact_calendar']):before {
          content: '\\e8a3';
        }
        :host([icon='perm_data_setting']):before {
          content: '\\e8a4';
        }
        :host([icon='perm_device_information']):before {
          content: '\\e8a5';
        }
        :host([icon='perm_identity']):before {
          content: '\\e8a6';
        }
        :host([icon='perm_media']):before {
          content: '\\e8a7';
        }
        :host([icon='perm_phone_msg']):before {
          content: '\\e8a8';
        }
        :host([icon='perm_scan_wifi']):before {
          content: '\\e8a9';
        }
        :host([icon='person']):before {
          content: '\\e7fd';
        }
        :host([icon='person_add']):before {
          content: '\\e7fe';
        }
        :host([icon='person_outline']):before {
          content: '\\e7ff';
        }
        :host([icon='person_pin']):before {
          content: '\\e55a';
        }
        :host([icon='person_pin_circle']):before {
          content: '\\e56a';
        }
        :host([icon='personal_video']):before {
          content: '\\e63b';
        }
        :host([icon='pets']):before {
          content: '\\e91d';
        }
        :host([icon='phone']):before {
          content: '\\e0cd';
        }
        :host([icon='phone_android']):before {
          content: '\\e324';
        }
        :host([icon='phone_bluetooth_speaker']):before {
          content: '\\e61b';
        }
        :host([icon='phone_forwarded']):before {
          content: '\\e61c';
        }
        :host([icon='phone_in_talk']):before {
          content: '\\e61d';
        }
        :host([icon='phone_iphone']):before {
          content: '\\e325';
        }
        :host([icon='phone_locked']):before {
          content: '\\e61e';
        }
        :host([icon='phone_missed']):before {
          content: '\\e61f';
        }
        :host([icon='phone_paused']):before {
          content: '\\e620';
        }
        :host([icon='phonelink']):before {
          content: '\\e326';
        }
        :host([icon='phonelink_erase']):before {
          content: '\\e0db';
        }
        :host([icon='phonelink_lock']):before {
          content: '\\e0dc';
        }
        :host([icon='phonelink_off']):before {
          content: '\\e327';
        }
        :host([icon='phonelink_ring']):before {
          content: '\\e0dd';
        }
        :host([icon='phonelink_setup']):before {
          content: '\\e0de';
        }
        :host([icon='photo']):before {
          content: '\\e410';
        }
        :host([icon='photo_album']):before {
          content: '\\e411';
        }
        :host([icon='photo_camera']):before {
          content: '\\e412';
        }
        :host([icon='photo_filter']):before {
          content: '\\e43b';
        }
        :host([icon='photo_library']):before {
          content: '\\e413';
        }
        :host([icon='photo_size_select_actual']):before {
          content: '\\e432';
        }
        :host([icon='photo_size_select_large']):before {
          content: '\\e433';
        }
        :host([icon='photo_size_select_small']):before {
          content: '\\e434';
        }
        :host([icon='picture_as_pdf']):before {
          content: '\\e415';
        }
        :host([icon='picture_in_picture']):before {
          content: '\\e8aa';
        }
        :host([icon='picture_in_picture_alt']):before {
          content: '\\e911';
        }
        :host([icon='pie_chart']):before {
          content: '\\e6c4';
        }
        :host([icon='pie_chart_outlined']):before {
          content: '\\e6c5';
        }
        :host([icon='pin_drop']):before {
          content: '\\e55e';
        }
        :host([icon='place']):before {
          content: '\\e55f';
        }
        :host([icon='play_arrow']):before {
          content: '\\e037';
        }
        :host([icon='play_circle_filled']):before {
          content: '\\e038';
        }
        :host([icon='play_circle_outline']):before {
          content: '\\e039';
        }
        :host([icon='play_for_work']):before {
          content: '\\e906';
        }
        :host([icon='playlist_add']):before {
          content: '\\e03b';
        }
        :host([icon='playlist_add_check']):before {
          content: '\\e065';
        }
        :host([icon='playlist_play']):before {
          content: '\\e05f';
        }
        :host([icon='plus_one']):before {
          content: '\\e800';
        }
        :host([icon='poll']):before {
          content: '\\e801';
        }
        :host([icon='polymer']):before {
          content: '\\e8ab';
        }
        :host([icon='pool']):before {
          content: '\\eb48';
        }
        :host([icon='portable_wifi_off']):before {
          content: '\\e0ce';
        }
        :host([icon='portrait']):before {
          content: '\\e416';
        }
        :host([icon='power']):before {
          content: '\\e63c';
        }
        :host([icon='power_input']):before {
          content: '\\e336';
        }
        :host([icon='power_settings_new']):before {
          content: '\\e8ac';
        }
        :host([icon='pregnant_woman']):before {
          content: '\\e91e';
        }
        :host([icon='present_to_all']):before {
          content: '\\e0df';
        }
        :host([icon='print']):before {
          content: '\\e8ad';
        }
        :host([icon='priority_high']):before {
          content: '\\e645';
        }
        :host([icon='public']):before {
          content: '\\e80b';
        }
        :host([icon='publish']):before {
          content: '\\e255';
        }
        :host([icon='query_builder']):before {
          content: '\\e8ae';
        }
        :host([icon='question_answer']):before {
          content: '\\e8af';
        }
        :host([icon='queue']):before {
          content: '\\e03c';
        }
        :host([icon='queue_music']):before {
          content: '\\e03d';
        }
        :host([icon='queue_play_next']):before {
          content: '\\e066';
        }
        :host([icon='radio']):before {
          content: '\\e03e';
        }
        :host([icon='radio_button_checked']):before {
          content: '\\e837';
        }
        :host([icon='radio_button_unchecked']):before {
          content: '\\e836';
        }
        :host([icon='rate_review']):before {
          content: '\\e560';
        }
        :host([icon='receipt']):before {
          content: '\\e8b0';
        }
        :host([icon='recent_actors']):before {
          content: '\\e03f';
        }
        :host([icon='record_voice_over']):before {
          content: '\\e91f';
        }
        :host([icon='redeem']):before {
          content: '\\e8b1';
        }
        :host([icon='redo']):before {
          content: '\\e15a';
        }
        :host([icon='refresh']):before {
          content: '\\e5d5';
        }
        :host([icon='remove']):before {
          content: '\\e15b';
        }
        :host([icon='remove_circle']):before {
          content: '\\e15c';
        }
        :host([icon='remove_circle_outline']):before {
          content: '\\e15d';
        }
        :host([icon='remove_from_queue']):before {
          content: '\\e067';
        }
        :host([icon='remove_red_eye']):before {
          content: '\\e417';
        }
        :host([icon='remove_shopping_cart']):before {
          content: '\\e928';
        }
        :host([icon='reorder']):before {
          content: '\\e8fe';
        }
        :host([icon='repeat']):before {
          content: '\\e040';
        }
        :host([icon='repeat_one']):before {
          content: '\\e041';
        }
        :host([icon='replay']):before {
          content: '\\e042';
        }
        :host([icon='replay_10']):before {
          content: '\\e059';
        }
        :host([icon='replay_30']):before {
          content: '\\e05a';
        }
        :host([icon='replay_5']):before {
          content: '\\e05b';
        }
        :host([icon='reply']):before {
          content: '\\e15e';
        }
        :host([icon='reply_all']):before {
          content: '\\e15f';
        }
        :host([icon='report']):before {
          content: '\\e160';
        }
        :host([icon='report_problem']):before {
          content: '\\e8b2';
        }
        :host([icon='restaurant']):before {
          content: '\\e56c';
        }
        :host([icon='restaurant_menu']):before {
          content: '\\e561';
        }
        :host([icon='restore']):before {
          content: '\\e8b3';
        }
        :host([icon='restore_page']):before {
          content: '\\e929';
        }
        :host([icon='ring_volume']):before {
          content: '\\e0d1';
        }
        :host([icon='room']):before {
          content: '\\e8b4';
        }
        :host([icon='room_service']):before {
          content: '\\eb49';
        }
        :host([icon='rotate_90_degrees_ccw']):before {
          content: '\\e418';
        }
        :host([icon='rotate_left']):before {
          content: '\\e419';
        }
        :host([icon='rotate_right']):before {
          content: '\\e41a';
        }
        :host([icon='rounded_corner']):before {
          content: '\\e920';
        }
        :host([icon='router']):before {
          content: '\\e328';
        }
        :host([icon='rowing']):before {
          content: '\\e921';
        }
        :host([icon='rss_feed']):before {
          content: '\\e0e5';
        }
        :host([icon='rv_hookup']):before {
          content: '\\e642';
        }
        :host([icon='satellite']):before {
          content: '\\e562';
        }
        :host([icon='save']):before {
          content: '\\e161';
        }
        :host([icon='scanner']):before {
          content: '\\e329';
        }
        :host([icon='schedule']):before {
          content: '\\e8b5';
        }
        :host([icon='school']):before {
          content: '\\e80c';
        }
        :host([icon='screen_lock_landscape']):before {
          content: '\\e1be';
        }
        :host([icon='screen_lock_portrait']):before {
          content: '\\e1bf';
        }
        :host([icon='screen_lock_rotation']):before {
          content: '\\e1c0';
        }
        :host([icon='screen_rotation']):before {
          content: '\\e1c1';
        }
        :host([icon='screen_share']):before {
          content: '\\e0e2';
        }
        :host([icon='sd_card']):before {
          content: '\\e623';
        }
        :host([icon='sd_storage']):before {
          content: '\\e1c2';
        }
        :host([icon='search']):before {
          content: '\\e8b6';
        }
        :host([icon='security']):before {
          content: '\\e32a';
        }
        :host([icon='select_all']):before {
          content: '\\e162';
        }
        :host([icon='send']):before {
          content: '\\e163';
        }
        :host([icon='sentiment_dissatisfied']):before {
          content: '\\e811';
        }
        :host([icon='sentiment_neutral']):before {
          content: '\\e812';
        }
        :host([icon='sentiment_satisfied']):before {
          content: '\\e813';
        }
        :host([icon='sentiment_very_dissatisfied']):before {
          content: '\\e814';
        }
        :host([icon='sentiment_very_satisfied']):before {
          content: '\\e815';
        }
        :host([icon='settings']):before {
          content: '\\e8b8';
        }
        :host([icon='settings_applications']):before {
          content: '\\e8b9';
        }
        :host([icon='settings_backup_restore']):before {
          content: '\\e8ba';
        }
        :host([icon='settings_bluetooth']):before {
          content: '\\e8bb';
        }
        :host([icon='settings_brightness']):before {
          content: '\\e8bd';
        }
        :host([icon='settings_cell']):before {
          content: '\\e8bc';
        }
        :host([icon='settings_ethernet']):before {
          content: '\\e8be';
        }
        :host([icon='settings_input_antenna']):before {
          content: '\\e8bf';
        }
        :host([icon='settings_input_component']):before {
          content: '\\e8c0';
        }
        :host([icon='settings_input_composite']):before {
          content: '\\e8c1';
        }
        :host([icon='settings_input_hdmi']):before {
          content: '\\e8c2';
        }
        :host([icon='settings_input_svideo']):before {
          content: '\\e8c3';
        }
        :host([icon='settings_overscan']):before {
          content: '\\e8c4';
        }
        :host([icon='settings_phone']):before {
          content: '\\e8c5';
        }
        :host([icon='settings_power']):before {
          content: '\\e8c6';
        }
        :host([icon='settings_remote']):before {
          content: '\\e8c7';
        }
        :host([icon='settings_system_daydream']):before {
          content: '\\e1c3';
        }
        :host([icon='settings_voice']):before {
          content: '\\e8c8';
        }
        :host([icon='share']):before {
          content: '\\e80d';
        }
        :host([icon='shop']):before {
          content: '\\e8c9';
        }
        :host([icon='shop_two']):before {
          content: '\\e8ca';
        }
        :host([icon='shopping_basket']):before {
          content: '\\e8cb';
        }
        :host([icon='shopping_cart']):before {
          content: '\\e8cc';
        }
        :host([icon='short_text']):before {
          content: '\\e261';
        }
        :host([icon='show_chart']):before {
          content: '\\e6e1';
        }
        :host([icon='shuffle']):before {
          content: '\\e043';
        }
        :host([icon='signal_cellular_4_bar']):before {
          content: '\\e1c8';
        }
        :host([icon='signal_cellular_connected_no_internet_4_bar']):before {
          content: '\\e1cd';
        }
        :host([icon='signal_cellular_no_sim']):before {
          content: '\\e1ce';
        }
        :host([icon='signal_cellular_null']):before {
          content: '\\e1cf';
        }
        :host([icon='signal_cellular_off']):before {
          content: '\\e1d0';
        }
        :host([icon='signal_wifi_4_bar']):before {
          content: '\\e1d8';
        }
        :host([icon='signal_wifi_4_bar_lock']):before {
          content: '\\e1d9';
        }
        :host([icon='signal_wifi_off']):before {
          content: '\\e1da';
        }
        :host([icon='sim_card']):before {
          content: '\\e32b';
        }
        :host([icon='sim_card_alert']):before {
          content: '\\e624';
        }
        :host([icon='skip_next']):before {
          content: '\\e044';
        }
        :host([icon='skip_previous']):before {
          content: '\\e045';
        }
        :host([icon='slideshow']):before {
          content: '\\e41b';
        }
        :host([icon='slow_motion_video']):before {
          content: '\\e068';
        }
        :host([icon='smartphone']):before {
          content: '\\e32c';
        }
        :host([icon='smoke_free']):before {
          content: '\\eb4a';
        }
        :host([icon='smoking_rooms']):before {
          content: '\\eb4b';
        }
        :host([icon='sms']):before {
          content: '\\e625';
        }
        :host([icon='sms_failed']):before {
          content: '\\e626';
        }
        :host([icon='snooze']):before {
          content: '\\e046';
        }
        :host([icon='sort']):before {
          content: '\\e164';
        }
        :host([icon='sort_by_alpha']):before {
          content: '\\e053';
        }
        :host([icon='spa']):before {
          content: '\\eb4c';
        }
        :host([icon='space_bar']):before {
          content: '\\e256';
        }
        :host([icon='speaker']):before {
          content: '\\e32d';
        }
        :host([icon='speaker_group']):before {
          content: '\\e32e';
        }
        :host([icon='speaker_notes']):before {
          content: '\\e8cd';
        }
        :host([icon='speaker_notes_off']):before {
          content: '\\e92a';
        }
        :host([icon='speaker_phone']):before {
          content: '\\e0d2';
        }
        :host([icon='spellcheck']):before {
          content: '\\e8ce';
        }
        :host([icon='star']):before {
          content: '\\e838';
        }
        :host([icon='star_border']):before {
          content: '\\e83a';
        }
        :host([icon='star_half']):before {
          content: '\\e839';
        }
        :host([icon='stars']):before {
          content: '\\e8d0';
        }
        :host([icon='stay_current_landscape']):before {
          content: '\\e0d3';
        }
        :host([icon='stay_current_portrait']):before {
          content: '\\e0d4';
        }
        :host([icon='stay_primary_landscape']):before {
          content: '\\e0d5';
        }
        :host([icon='stay_primary_portrait']):before {
          content: '\\e0d6';
        }
        :host([icon='stop']):before {
          content: '\\e047';
        }
        :host([icon='stop_screen_share']):before {
          content: '\\e0e3';
        }
        :host([icon='storage']):before {
          content: '\\e1db';
        }
        :host([icon='store']):before {
          content: '\\e8d1';
        }
        :host([icon='store_mall_directory']):before {
          content: '\\e563';
        }
        :host([icon='straighten']):before {
          content: '\\e41c';
        }
        :host([icon='streetview']):before {
          content: '\\e56e';
        }
        :host([icon='strikethrough_s']):before {
          content: '\\e257';
        }
        :host([icon='style']):before {
          content: '\\e41d';
        }
        :host([icon='subdirectory_arrow_left']):before {
          content: '\\e5d9';
        }
        :host([icon='subdirectory_arrow_right']):before {
          content: '\\e5da';
        }
        :host([icon='subject']):before {
          content: '\\e8d2';
        }
        :host([icon='subscriptions']):before {
          content: '\\e064';
        }
        :host([icon='subtitles']):before {
          content: '\\e048';
        }
        :host([icon='subway']):before {
          content: '\\e56f';
        }
        :host([icon='supervisor_account']):before {
          content: '\\e8d3';
        }
        :host([icon='surround_sound']):before {
          content: '\\e049';
        }
        :host([icon='swap_calls']):before {
          content: '\\e0d7';
        }
        :host([icon='swap_horiz']):before {
          content: '\\e8d4';
        }
        :host([icon='swap_vert']):before {
          content: '\\e8d5';
        }
        :host([icon='swap_vertical_circle']):before {
          content: '\\e8d6';
        }
        :host([icon='switch_camera']):before {
          content: '\\e41e';
        }
        :host([icon='switch_video']):before {
          content: '\\e41f';
        }
        :host([icon='sync']):before {
          content: '\\e627';
        }
        :host([icon='sync_disabled']):before {
          content: '\\e628';
        }
        :host([icon='sync_problem']):before {
          content: '\\e629';
        }
        :host([icon='system_update']):before {
          content: '\\e62a';
        }
        :host([icon='system_update_alt']):before {
          content: '\\e8d7';
        }
        :host([icon='tab']):before {
          content: '\\e8d8';
        }
        :host([icon='tab_unselected']):before {
          content: '\\e8d9';
        }
        :host([icon='tablet']):before {
          content: '\\e32f';
        }
        :host([icon='tablet_android']):before {
          content: '\\e330';
        }
        :host([icon='tablet_mac']):before {
          content: '\\e331';
        }
        :host([icon='tag_faces']):before {
          content: '\\e420';
        }
        :host([icon='tap_and_play']):before {
          content: '\\e62b';
        }
        :host([icon='terrain']):before {
          content: '\\e564';
        }
        :host([icon='text_fields']):before {
          content: '\\e262';
        }
        :host([icon='text_format']):before {
          content: '\\e165';
        }
        :host([icon='textsms']):before {
          content: '\\e0d8';
        }
        :host([icon='texture']):before {
          content: '\\e421';
        }
        :host([icon='theaters']):before {
          content: '\\e8da';
        }
        :host([icon='thumb_down']):before {
          content: '\\e8db';
        }
        :host([icon='thumb_up']):before {
          content: '\\e8dc';
        }
        :host([icon='thumbs_up_down']):before {
          content: '\\e8dd';
        }
        :host([icon='time_to_leave']):before {
          content: '\\e62c';
        }
        :host([icon='timelapse']):before {
          content: '\\e422';
        }
        :host([icon='timeline']):before {
          content: '\\e922';
        }
        :host([icon='timer']):before {
          content: '\\e425';
        }
        :host([icon='timer_10']):before {
          content: '\\e423';
        }
        :host([icon='timer_3']):before {
          content: '\\e424';
        }
        :host([icon='timer_off']):before {
          content: '\\e426';
        }
        :host([icon='title']):before {
          content: '\\e264';
        }
        :host([icon='toc']):before {
          content: '\\e8de';
        }
        :host([icon='today']):before {
          content: '\\e8df';
        }
        :host([icon='toll']):before {
          content: '\\e8e0';
        }
        :host([icon='tonality']):before {
          content: '\\e427';
        }
        :host([icon='touch_app']):before {
          content: '\\e913';
        }
        :host([icon='toys']):before {
          content: '\\e332';
        }
        :host([icon='track_changes']):before {
          content: '\\e8e1';
        }
        :host([icon='traffic']):before {
          content: '\\e565';
        }
        :host([icon='train']):before {
          content: '\\e570';
        }
        :host([icon='tram']):before {
          content: '\\e571';
        }
        :host([icon='transfer_within_a_station']):before {
          content: '\\e572';
        }
        :host([icon='transform']):before {
          content: '\\e428';
        }
        :host([icon='translate']):before {
          content: '\\e8e2';
        }
        :host([icon='trending_down']):before {
          content: '\\e8e3';
        }
        :host([icon='trending_flat']):before {
          content: '\\e8e4';
        }
        :host([icon='trending_up']):before {
          content: '\\e8e5';
        }
        :host([icon='tune']):before {
          content: '\\e429';
        }
        :host([icon='turned_in']):before {
          content: '\\e8e6';
        }
        :host([icon='turned_in_not']):before {
          content: '\\e8e7';
        }
        :host([icon='tv']):before {
          content: '\\e333';
        }
        :host([icon='unarchive']):before {
          content: '\\e169';
        }
        :host([icon='undo']):before {
          content: '\\e166';
        }
        :host([icon='unfold_less']):before {
          content: '\\e5d6';
        }
        :host([icon='unfold_more']):before {
          content: '\\e5d7';
        }
        :host([icon='update']):before {
          content: '\\e923';
        }
        :host([icon='usb']):before {
          content: '\\e1e0';
        }
        :host([icon='verified_user']):before {
          content: '\\e8e8';
        }
        :host([icon='vertical_align_bottom']):before {
          content: '\\e258';
        }
        :host([icon='vertical_align_center']):before {
          content: '\\e259';
        }
        :host([icon='vertical_align_top']):before {
          content: '\\e25a';
        }
        :host([icon='vibration']):before {
          content: '\\e62d';
        }
        :host([icon='video_call']):before {
          content: '\\e070';
        }
        :host([icon='video_label']):before {
          content: '\\e071';
        }
        :host([icon='video_library']):before {
          content: '\\e04a';
        }
        :host([icon='videocam']):before {
          content: '\\e04b';
        }
        :host([icon='videocam_off']):before {
          content: '\\e04c';
        }
        :host([icon='videogame_asset']):before {
          content: '\\e338';
        }
        :host([icon='view_agenda']):before {
          content: '\\e8e9';
        }
        :host([icon='view_array']):before {
          content: '\\e8ea';
        }
        :host([icon='view_carousel']):before {
          content: '\\e8eb';
        }
        :host([icon='view_column']):before {
          content: '\\e8ec';
        }
        :host([icon='view_comfy']):before {
          content: '\\e42a';
        }
        :host([icon='view_compact']):before {
          content: '\\e42b';
        }
        :host([icon='view_day']):before {
          content: '\\e8ed';
        }
        :host([icon='view_headline']):before {
          content: '\\e8ee';
        }
        :host([icon='view_list']):before {
          content: '\\e8ef';
        }
        :host([icon='view_module']):before {
          content: '\\e8f0';
        }
        :host([icon='view_quilt']):before {
          content: '\\e8f1';
        }
        :host([icon='view_stream']):before {
          content: '\\e8f2';
        }
        :host([icon='view_week']):before {
          content: '\\e8f3';
        }
        :host([icon='vignette']):before {
          content: '\\e435';
        }
        :host([icon='visibility']):before {
          content: '\\e8f4';
        }
        :host([icon='visibility_off']):before {
          content: '\\e8f5';
        }
        :host([icon='voice_chat']):before {
          content: '\\e62e';
        }
        :host([icon='voicemail']):before {
          content: '\\e0d9';
        }
        :host([icon='volume_down']):before {
          content: '\\e04d';
        }
        :host([icon='volume_mute']):before {
          content: '\\e04e';
        }
        :host([icon='volume_off']):before {
          content: '\\e04f';
        }
        :host([icon='volume_up']):before {
          content: '\\e050';
        }
        :host([icon='vpn_key']):before {
          content: '\\e0da';
        }
        :host([icon='vpn_lock']):before {
          content: '\\e62f';
        }
        :host([icon='wallpaper']):before {
          content: '\\e1bc';
        }
        :host([icon='warning']):before {
          content: '\\e002';
        }
        :host([icon='watch']):before {
          content: '\\e334';
        }
        :host([icon='watch_later']):before {
          content: '\\e924';
        }
        :host([icon='wb_auto']):before {
          content: '\\e42c';
        }
        :host([icon='wb_cloudy']):before {
          content: '\\e42d';
        }
        :host([icon='wb_incandescent']):before {
          content: '\\e42e';
        }
        :host([icon='wb_iridescent']):before {
          content: '\\e436';
        }
        :host([icon='wb_sunny']):before {
          content: '\\e430';
        }
        :host([icon='wc']):before {
          content: '\\e63d';
        }
        :host([icon='web']):before {
          content: '\\e051';
        }
        :host([icon='web_asset']):before {
          content: '\\e069';
        }
        :host([icon='weekend']):before {
          content: '\\e16b';
        }
        :host([icon='whatshot']):before {
          content: '\\e80e';
        }
        :host([icon='widgets']):before {
          content: '\\e1bd';
        }
        :host([icon='wifi']):before {
          content: '\\e63e';
        }
        :host([icon='wifi_lock']):before {
          content: '\\e1e1';
        }
        :host([icon='wifi_tethering']):before {
          content: '\\e1e2';
        }
        :host([icon='work']):before {
          content: '\\e8f9';
        }
        :host([icon='wrap_text']):before {
          content: '\\e25b';
        }
        :host([icon='youtube_searched_for']):before {
          content: '\\e8fa';
        }
        :host([icon='zoom_in']):before {
          content: '\\e8ff';
        }
        :host([icon='zoom_out']):before {
          content: '\\e900';
        }
        :host([icon='zoom_out_map']):before {
          content: '\\e56b';
        }
      `,
    ];
  }

  render() {
    return html``;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
    if (name == 'color') {
      this.style.color = this.color;
    } else if (name == 'icon' && newval.indexOf('url') > -1) {
      this.handleIcon(newval);
    }
  }

  private handleIcon(val: string): void {
    this.style.backgroundImage = val;
  }
}
