import { SvgIcon } from "@mui/material";

const FromIcon = () => {

    return (
        <SvgIcon>
            <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99988 17.3281C7.99988 17.3281 14.2608 11.7629 14.2608 7.58899C14.2608 4.13121 11.4577 1.32812 7.99988 1.32812C4.5421 1.32812 1.73901 4.13121 1.73901 7.58899C1.73901 11.7629 7.99988 17.3281 7.99988 17.3281Z" stroke="black" strokeWidth="2" />
                <path d="M10.0001 7.32825C10.0001 8.43282 9.10471 9.32825 8.00014 9.32825C6.89557 9.32825 6.00014 8.43282 6.00014 7.32825C6.00014 6.22368 6.89557 5.32825 8.00014 5.32825C9.10471 5.32825 10.0001 6.22368 10.0001 7.32825Z" stroke="black" strokeWidth="2" />
            </svg>
        </SvgIcon >
    )
}

const ArrowDownIcon = () => {
    return (
        <SvgIcon>
            <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8333 0.8278L7.70703 5.95403C7.3165 6.34455 6.68334 6.34455 6.29281 5.95403L1.16659 0.827799" stroke="#637083" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </SvgIcon>
    )
}

const MailIcon = () => {
    return (
        <SvgIcon>
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.90625 2.95345L8.46637 6.94533C8.78741 7.17582 9.21259 7.17582 9.53363 6.94533L15.0938 2.95345M3.375 13.1618H14.625C15.6605 13.1618 16.5 12.2912 16.5 11.2173V3.43956C16.5 2.36567 15.6605 1.49512 14.625 1.49512H3.375C2.33947 1.49512 1.5 2.36567 1.5 3.43956V11.2173C1.5 12.2912 2.33947 13.1618 3.375 13.1618Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </SvgIcon>
    )
}

const ToLogo = () => {
    return (
        <SvgIcon>
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.55269 10.9961L9.41411 16.38C9.76302 17.3892 11.1779 17.423 11.5745 16.4316L16.9147 3.08312C17.2862 2.15451 16.3802 1.22563 15.4426 1.57386L1.75163 6.65875C0.751143 7.03034 0.748911 8.44465 1.74822 8.81939L7.55269 10.9961Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </SvgIcon>
    )
}

const FastDeliveryIcon = ({ selected }) => {
    return (
        <div className='back-icon' style={{ backgroundColor: selected ? "white" : "#F3F4F6" }} >
            <SvgIcon >
                <svg width="25" height="25" viewBox="0 0 25 25" fill={selected ? "#1975FF" : "#637083"} xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.95811 11.8203L3.80973 7.01904C3.46735 6.75118 3.24325 6.35995 3.18668 5.93132C3.13011 5.50268 3.24569 5.0717 3.50803 4.73307L3.57184 4.65529L3.73504 4.4881C4.02185 4.20142 4.38729 4.00583 4.78664 3.92528C5.18599 3.84473 5.60193 3.88271 5.98356 4.03456L14.186 7.29695L16.8021 4.5011C17.2691 4.00062 17.9107 3.69804 18.5983 3.65402C19.2858 3.60999 19.9686 3.82778 20.5097 4.26373L20.6643 4.39865L20.7292 4.46354C21.8044 5.53874 21.8175 7.26869 20.7487 8.33752L17.8967 11.0057L21.1591 19.2101C21.311 19.5918 21.349 20.0077 21.2684 20.4071C21.1879 20.8064 20.9923 21.1718 20.7056 21.4587L20.6112 21.5531C20.4492 21.715 20.2541 21.8402 20.0388 21.9202C19.8235 22.0003 19.5929 22.0333 19.3624 22.0173C19.1319 22.0012 18.9067 21.9363 18.7018 21.8269C18.4968 21.7176 18.3168 21.5662 18.1737 21.383L13.3714 15.2336L11.1943 17.2689L11.9255 19.8841C12.0165 20.2092 12.0203 20.5513 11.9365 20.8757C11.8526 21.2001 11.6842 21.4952 11.4481 21.7312C11.1873 21.992 10.8321 22.1369 10.4604 22.1341C10.0888 22.1312 9.7313 21.9809 9.46652 21.7161L8.00298 20.2526L7.83169 20.3979C7.42051 20.7128 6.90657 20.8656 6.3857 20.8278C5.86484 20.7901 5.3726 20.5644 5.00078 20.1928C4.62895 19.8212 4.40293 19.3291 4.36485 18.8083C4.32676 18.2874 4.47922 17.7734 4.79379 17.362L4.94011 17.1897L3.47656 15.7262C3.21179 15.4614 3.06146 15.1039 3.05863 14.7323C3.05581 14.3606 3.20073 14.0053 3.46152 13.7446C3.94234 13.2637 4.64737 13.0818 5.30861 13.2672L7.92279 13.9974L9.95811 11.8203ZM4.73236 5.48543L4.6193 5.60049C4.58294 5.6478 4.56706 5.70788 4.57513 5.76757C4.58319 5.82725 4.61456 5.88165 4.66234 5.91884L12.0276 11.6716L8.38062 15.5762L4.95029 14.6158C4.86394 14.5918 4.77311 14.5909 4.68699 14.6132C4.60088 14.6355 4.52252 14.6802 4.45984 14.7429L6.88778 17.1708L5.95417 18.1723C5.81491 18.3116 5.73752 18.5013 5.73903 18.6997C5.74053 18.8982 5.82081 19.0891 5.9622 19.2305C6.10359 19.3719 6.29451 19.4522 6.49295 19.4537C6.6914 19.4552 6.88112 19.3778 7.02038 19.2385L8.01988 18.3029L10.4498 20.7329L10.5165 20.6501C10.5548 20.5907 10.5799 20.5236 10.5903 20.4534C10.6007 20.3831 10.5961 20.3112 10.5769 20.2424L9.61555 16.8111L13.5201 13.1641L19.2909 20.5513C19.3807 20.6411 19.5244 20.6432 19.6129 20.5547L19.7073 20.4603C19.8028 20.3647 19.868 20.2428 19.8948 20.1096C19.9216 19.9764 19.9088 19.8377 19.8581 19.7105L16.2432 10.6187L19.7602 7.33134C19.8831 7.20864 19.9803 7.06251 20.0462 6.90134C20.112 6.74016 20.1452 6.5671 20.1439 6.39205C20.1426 6.21701 20.1067 6.04342 20.0384 5.88122C19.9701 5.71903 19.8707 5.57141 19.7459 5.44683L19.7139 5.41488C19.5852 5.29429 19.4343 5.19991 19.27 5.13715C19.1056 5.07439 18.931 5.04448 18.7561 5.04913C18.5812 5.05378 18.4094 5.09291 18.2507 5.16427C18.0919 5.23563 17.9493 5.33782 17.8309 5.46499L14.571 8.95046L5.48319 5.3336C5.35596 5.28287 5.21727 5.27012 5.08409 5.29691C4.95091 5.3237 4.82902 5.38888 4.73335 5.48444" fill="current" />
                </svg>

            </SvgIcon>
        </div>
    )
}

const SlowDeliveryIcon = ({ selected }) => {
    return (
        <div className="back-icon" style={{ backgroundColor: selected ? "white" : "#F3F4F6" }}>
            <SvgIcon>
                <svg width="25" height="25" viewBox="0 0 25 25" fill={selected ? "#1975FF" : "#637083"} xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.50855 2.97144C4.92046 2.55953 5.47913 2.32812 6.06166 2.32812H19.2402C19.8227 2.32812 20.3814 2.55953 20.7933 2.97144C21.2052 3.38335 21.4366 3.94202 21.4366 4.52455V18.4352C21.4366 19.0178 21.2052 19.5764 20.7933 19.9883C20.3814 20.4003 19.8227 20.6317 19.2402 20.6317H18.5081V22.096C18.5081 22.5003 18.1803 22.8281 17.7759 22.8281C17.3716 22.8281 17.0438 22.5003 17.0438 22.096V20.6317H8.25808V22.096C8.25808 22.5003 7.93029 22.8281 7.52594 22.8281C7.12159 22.8281 6.7938 22.5003 6.7938 22.096V20.6317H6.06166C5.47913 20.6317 4.92046 20.4003 4.50855 19.9883C4.09664 19.5764 3.86523 19.0178 3.86523 18.4352V4.52455C3.86523 3.94202 4.09664 3.38335 4.50855 2.97144ZM5.32952 13.3103V18.4352C5.32952 18.6294 5.40665 18.8156 5.54396 18.9529C5.68126 19.0902 5.86748 19.1674 6.06166 19.1674H19.2402C19.4344 19.1674 19.6206 19.0903 19.7579 18.9529C19.8952 18.8156 19.9724 18.6294 19.9724 18.4352V13.3103H5.32952ZM19.9724 11.846H5.32952V4.52455C5.32952 4.33037 5.40665 4.14415 5.54396 4.00685C5.68126 3.86954 5.86748 3.79241 6.06166 3.79241H19.2402C19.4344 3.79241 19.6206 3.86954 19.7579 4.00685C19.8952 4.14415 19.9724 4.33037 19.9724 4.52455V11.846Z" fill="current" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25837 16.6049C8.35546 16.6049 8.44857 16.5663 8.51722 16.4977C8.58587 16.429 8.62444 16.3359 8.62444 16.2388C8.62444 16.1417 8.58587 16.0486 8.51722 15.98C8.44857 15.9113 8.35546 15.8728 8.25837 15.8728C8.16128 15.8728 8.06817 15.9113 7.99952 15.98C7.93086 16.0486 7.8923 16.1418 7.8923 16.2388C7.8923 16.3359 7.93086 16.429 7.99952 16.4977C8.06817 16.5663 8.16128 16.6049 8.25837 16.6049ZM7.48182 15.4623C7.68777 15.2563 7.96711 15.1406 8.25837 15.1406C8.54963 15.1406 8.82897 15.2563 9.03492 15.4623C9.24088 15.6682 9.35658 15.9476 9.35658 16.2388C9.35658 16.5301 9.24088 16.8094 9.03492 17.0154C8.82897 17.2213 8.54963 17.3371 8.25837 17.3371C7.96711 17.3371 7.68777 17.2213 7.48182 17.0154C7.27586 16.8094 7.16016 16.5301 7.16016 16.2388C7.16016 15.9476 7.27586 15.6682 7.48182 15.4623ZM17.0441 16.6049C17.1412 16.6049 17.2343 16.5663 17.3029 16.4977C17.3716 16.429 17.4101 16.3359 17.4101 16.2388C17.4101 16.1418 17.3716 16.0486 17.3029 15.98C17.2343 15.9113 17.1412 15.8728 17.0441 15.8728C16.947 15.8728 16.8539 15.9113 16.7852 15.98C16.7166 16.0486 16.678 16.1418 16.678 16.2388C16.678 16.3359 16.7166 16.429 16.7852 16.4977C16.8539 16.5663 16.947 16.6049 17.0441 16.6049ZM16.2675 15.4623C16.4735 15.2563 16.7528 15.1406 17.0441 15.1406C17.3353 15.1406 17.6147 15.2563 17.8206 15.4623C18.0266 15.6682 18.1423 15.9476 18.1423 16.2388C18.1423 16.5301 18.0266 16.8094 17.8206 17.0154C17.6147 17.2213 17.3353 17.3371 17.0441 17.3371C16.7528 17.3371 16.4735 17.2213 16.2675 17.0154C16.0616 16.8094 15.9459 16.5301 15.9459 16.2388C15.9459 15.9476 16.0616 15.6682 16.2675 15.4623Z" fill="current" />
                </svg>

            </SvgIcon>

        </div>
    )
}

const ProfileIcon = ({ isOpen }) => {
    return (
        <SvgIcon sx={{ position: "relative", top: "5px", marginRight: "16px" }}>
            <svg width="24" height="24" viewBox="0 0 25 24" fill={isOpen ? "#1975FF" : "black"} xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5327 8C16.5327 10.2091 14.7419 12 12.5327 12C10.3236 12 8.53271 10.2091 8.53271 8C8.53271 5.79086 10.3236 4 12.5327 4C14.7419 4 16.5327 5.79086 16.5327 8ZM15.0327 8C15.0327 9.38071 13.9134 10.5 12.5327 10.5C11.152 10.5 10.0327 9.38071 10.0327 8C10.0327 6.61929 11.152 5.5 12.5327 5.5C13.9134 5.5 15.0327 6.61929 15.0327 8Z" fill="current" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.53271 17.772V20H20.5327V17.772C20.5327 16.1046 19.4984 14.6121 17.9372 14.0267L17.7996 13.9751C14.4038 12.7017 10.6616 12.7017 7.26586 13.9751L7.12822 14.0267C5.56701 14.6121 4.53271 16.1046 4.53271 17.772ZM7.79255 15.3796C10.8487 14.2335 14.2167 14.2335 17.2729 15.3796L17.4105 15.4312C18.3863 15.7971 19.0327 16.7299 19.0327 17.772V18.5H6.03271V17.772C6.03271 16.7299 6.67915 15.7971 7.65491 15.4312L7.79255 15.3796Z" fill="current" />
            </svg>
        </SvgIcon>
    )
}

const CheckedRadio = () => {
    return (
        <SvgIcon>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.365234" y="0.328125" width="20" height="20" rx="10" fill="#1975FF" />
                <path d="M7.03223 10.9948L9.03223 12.9948L13.6989 8.32812" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </SvgIcon>

    )
}


const UnCheckedRadio = () => {
    return (
        <SvgIcon>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.11523" y="1.07812" width="18.5" height="18.5" rx="9.25" fill="white" />
                <rect x="1.11523" y="1.07812" width="18.5" height="18.5" rx="9.25" stroke="#CED2DA" stroke-width="1.5" />
            </svg>
        </SvgIcon>

    )
}

const EditItem = () => {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9852 3.77492C17.7475 2.97561 19.0135 2.94565 19.8128 3.708L21.2601 5.08836C22.0594 5.85071 22.0894 7.11668 21.327 7.91599L9.37796 20.4443C9.11733 20.7176 8.78466 20.9115 8.41844 21.0036L5.06287 21.8474C4.34965 22.0268 3.69332 21.4008 3.83873 20.6799L4.52289 17.2882C4.59756 16.918 4.7755 16.5765 5.03613 16.3033L16.9852 3.77492ZM18.7776 4.79346L20.2248 6.17382C20.4247 6.3644 20.4321 6.6809 20.2416 6.88072L19.2344 7.93673L17.0635 5.86619L18.0706 4.81019C18.2612 4.61036 18.5777 4.60287 18.7776 4.79346ZM16.1681 6.80493L6.12158 17.3385C6.05643 17.4068 6.01194 17.4922 5.99327 17.5848L5.46587 20.1994L8.05262 19.5489C8.14417 19.5259 8.22734 19.4774 8.2925 19.4091L18.3391 8.87547L16.1681 6.80493Z" fill="#97A1AF" />
        </svg>
    )
}

export { FromIcon, ArrowDownIcon, MailIcon, ToLogo, FastDeliveryIcon, SlowDeliveryIcon, ProfileIcon, CheckedRadio, UnCheckedRadio, EditItem }