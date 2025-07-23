import React, { useRef } from 'react'

export default function Login() {
  const account = {"www@gmailcom" : 1111};

  const emailRef = useRef();
  const pwdRef = useRef();


  const handelLogin = (e) => {
    e.preventDefault(); // ✅ 새로고침 막기
    const email = emailRef.current.value;
    const pwd = pwdRef.current.value;
    
    if (email in account) {
      if (account[email] == pwd) {
        alert("로그인 성공!");
      }
      else {
        alert("비밀번호가 다릅니다!");
      }
    }
    else {
      alert("존재하지 않는 이메일입니다!");
    }
  } 

  return (
      <>
    <div className="py-12 flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm"> 
          <h2 className="mt-20 text-center text-2xl/9 font-bold tracking-tight text-gray-600">
            로그인 페이지
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="flex justify-start block text-sm/6 font-medium text-gray-900">
                이메일 주소
              </label>
              <div className="mt-1">
                <input
                  // useRef => 입력창에서 읽어옴
                  ref={emailRef}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-start">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  비밀번호
                </label>
                <div className="text-sm">
                </div>
              </div>
              <div className="mt-1">
                <input
                  // useRef => 입력창에서 읽어옴
                  ref={pwdRef}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                //로그인처리
                onClick={handelLogin}
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm/6 font-semibold
                           text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2
                          focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
