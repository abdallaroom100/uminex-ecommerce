import { RiUserLine } from "react-icons/ri";

const Auth = () => {
  return (
    <div className="actions__container">
      <div className="auth flex gap-[6px] items-center justify-center cursor-pointer">
        <RiUserLine size={25} />
        <div className="auth__content">
          <p className="text-[12px] leading-[1.2]">Login</p>
          <p className="text-[13px] font-[600]">Account</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
