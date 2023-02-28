import { app } from './app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const auth = getAuth(app);

/**
 * firebase 인증(auth) 회원가입 유틸리티 함수
 * @param {string} email 회원가입할 이메일 주소
 * @param {*} password 회원가입할 패스워드 6자리 이상
 * @returns {Promise<UserCredential>} 사용자 정보 Promise 객체로 변환
 */
export async function createAuthUser(email, password) {
  try {
    // 회원가입 기능(Firebase Auth 요청)
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredential;
  } catch ({ code, message }) {
    // console.error({ errorCode: code, errorMessage: message });
    switch (code) {
      case 'auth/email-already-in-use':
        console.error('이미 가입된 이메일 입니다!!');
        break;
      case 'auth/weak-password':
        console.error('비밀번호는 6자리 이상 적어주세요!!');
        break;
      case 'auth/invalid-email':
        console.error('올바른 이메일 형식이 아닙니다!!');
        break;
      default:
        break;
    }
  }
}
