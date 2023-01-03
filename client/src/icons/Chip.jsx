import { Icon } from "@chakra-ui/react";
import React from "react";

function Chip() {
  const CircleIcon = (props) => (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="29"
        viewBox="0 0 36 29"
        fill="none"
      >
        <path
          d="M32.0857 28.3465H3.81743C2.02476 28.3465 0.553314 26.8751 0.553314 25.0824V4.14025C0.553314 2.34758 2.02476 0.876129 3.81743 0.876129H32.0857C33.8784 0.876129 35.3499 2.34758 35.3499 4.14025V25.0824C35.3602 26.8855 33.8888 28.3465 32.0857 28.3465Z"
          fill="#F6C859"
        />
        <path
          d="M13.9518 24.6886C13.8067 24.6886 13.6616 24.6057 13.5891 24.471C13.4854 24.2742 13.5684 24.0255 13.7652 23.9322C14.3455 23.6317 15.1434 23.0721 15.5994 22.0981C16.1796 20.865 16.0346 19.5282 15.7859 19.4142C15.7237 19.3832 15.475 19.5075 15.3299 19.5904C14.9465 19.7873 14.4284 20.0567 13.817 19.8391C13.216 19.6318 12.9259 19.1034 12.7912 18.8443C11.8793 17.176 11.5995 12.8238 12.5632 10.6581C12.8844 9.94311 13.3197 9.51826 13.8585 9.39391C14.4077 9.26956 14.8533 9.49753 15.216 9.68405C15.5165 9.83949 15.6615 9.90166 15.7548 9.84985C16.1278 9.62188 16.1175 8.2437 15.5994 7.14529C15.1434 6.17124 14.3455 5.61168 13.7652 5.31117C13.5684 5.20755 13.4854 4.96921 13.5891 4.77233C13.6927 4.57545 13.931 4.49255 14.1279 4.59617C14.8222 4.94849 15.7652 5.62204 16.3247 6.79298C16.8739 7.95355 17.133 9.95347 16.1693 10.5338C15.6823 10.8239 15.216 10.5856 14.8429 10.3991C14.5631 10.254 14.2937 10.1193 14.0347 10.1814C13.6823 10.2643 13.4336 10.6685 13.2886 11.0001C12.4492 12.886 12.6876 16.9998 13.4855 18.4713C13.6202 18.72 13.786 18.9894 14.0657 19.093C14.3352 19.1863 14.5942 19.0723 14.9569 18.8858C15.3092 18.7096 15.703 18.5024 16.1278 18.7096C17.0294 19.1448 16.9672 21.0929 16.3144 22.4711C15.7548 23.6421 14.8118 24.3156 14.1176 24.6679C14.0761 24.6679 14.0139 24.6886 13.9518 24.6886Z"
          fill="#7D662D"
        />
        <path
          d="M12.7394 11.3835H5.48576C5.26816 11.3835 5.08163 11.2073 5.08163 10.9794C5.08163 10.7514 5.25779 10.5752 5.48576 10.5752H12.7394C12.957 10.5752 13.1435 10.7514 13.1435 10.9794C13.1435 11.2073 12.9673 11.3835 12.7394 11.3835Z"
          fill="#7D662D"
        />
        <path
          d="M12.7394 18.6371H5.48576C5.26816 18.6371 5.08163 18.4609 5.08163 18.2329C5.08163 18.0153 5.25779 17.8288 5.48576 17.8288H12.7394C12.957 17.8288 13.1435 18.005 13.1435 18.2329C13.1435 18.4609 12.9673 18.6371 12.7394 18.6371Z"
          fill="#7D662D"
        />
        <path
          d="M22.4177 24.6887C22.3556 24.6887 22.2934 24.6783 22.2312 24.6472C21.5369 24.2949 20.594 23.6214 20.0344 22.4504C19.3816 21.0722 19.3194 19.1345 20.2209 18.6889C20.6458 18.4817 21.0396 18.6889 21.3919 18.8651C21.7545 19.0516 22.0136 19.1656 22.283 19.0723C22.5835 18.9687 22.7597 18.6475 22.8633 18.4506C23.6716 16.9791 23.9099 12.8757 23.0602 10.9794C22.9151 10.6581 22.6664 10.2436 22.3141 10.1607C22.0965 10.1089 21.9618 9.89133 22.0136 9.67372C22.0654 9.45611 22.283 9.3214 22.5006 9.37321C23.0395 9.49756 23.4747 9.92241 23.7959 10.6478C24.7596 12.8031 24.4798 17.1553 23.5679 18.834C23.4332 19.093 23.1327 19.6215 22.5421 19.8288C21.9307 20.036 21.4126 19.7769 21.0292 19.5801C20.8841 19.5075 20.6354 19.3832 20.5732 19.4039C20.3349 19.5179 20.1795 20.8546 20.7598 22.0877C21.2157 23.0618 22.0136 23.6214 22.5939 23.9219C22.7908 24.0255 22.8737 24.2638 22.77 24.4607C22.6975 24.6058 22.5628 24.6887 22.4177 24.6887Z"
          fill="#7D662D"
        />
        <path
          d="M20.8012 9.77732C20.6354 9.77732 20.48 9.67369 20.4178 9.49754C19.5577 6.90696 21.5784 4.90704 22.2312 4.57545C22.4281 4.47183 22.6768 4.55473 22.77 4.75161C22.8737 4.94849 22.7908 5.19719 22.5939 5.29045C22.3037 5.43552 20.4489 7.03131 21.1846 9.23848C21.2571 9.44572 21.1432 9.6737 20.9255 9.74623C20.8841 9.76696 20.8426 9.77732 20.8012 9.77732Z"
          fill="#7D662D"
        />
        <path
          d="M30.8733 11.3835H23.6197C23.4021 11.3835 23.2156 11.2073 23.2156 10.9794C23.2156 10.7514 23.3918 10.5752 23.6197 10.5752H30.8733C31.0909 10.5752 31.2775 10.7514 31.2775 10.9794C31.2775 11.2073 31.1013 11.3835 30.8733 11.3835Z"
          fill="#7D662D"
        />
        <path
          d="M30.8733 18.6371H23.6197C23.4021 18.6371 23.2156 18.4609 23.2156 18.2329C23.2156 18.0153 23.3918 17.8288 23.6197 17.8288H30.8733C31.0909 17.8288 31.2775 18.005 31.2775 18.2329C31.2775 18.4609 31.1013 18.6371 30.8733 18.6371Z"
          fill="#7D662D"
        />

        <script
          xmlns=""
          id="globalVarsDetection"
          src="chrome-extension://cmkdbmfndkfgebldhnkbfhlneefdaaip/js/wrs_env.js"
        />
      </svg>
    </>
  );
  return <CircleIcon />;
}

export default Chip;
