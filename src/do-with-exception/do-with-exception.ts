import { HttpStatus, Injectable } from '@nestjs/common';

export class DoWithException extends Error {
  name: string;
  errorCode: number;
  statusCode: number;

  constructor(message, errorCode, statusCode) {
    super(message);
    this.name = 'DoWithException';
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }

  getStatus() {
    return this.statusCode;
  }
}

enum DoWithErrorCode {
  // User
  UserAlreadyExists = '0011',
  UserNotFound = '0012',
  UserNameNotUnique = '0013',
  SelfFriendship = '0014',

  // Group
  FailedToleftGroup = '0100',   // 그룹 떠나기에 실패 했을 떄
  FailedToMakeGroup = '0101',   // 그룹 생성에 실패했을 때

  // Routine
  ExceedMaxRoutines = '0200',   // 그룹당 최대 3개의 루틴이 등록 가능하다

  // Utils
  NotAllowedExtension     = '1000',  // 지원하지 않는 확장자의 파일이 넘어왔을 때
  ThereIsNoFile           = '1001',  // 파일 업로드 모듈 이용시 요청에 파일을 보내지 않았을 때
  FailedToDeletedOirginal = '1002',  // 이미지 압축 후 원본 파일 삭제 실패시
  FailedToResizeImage     = '1003',  // 업로드한 이미지 압축에 실패시
}

enum DoWithErrorMsg {
  // User
  UserAlreadyExists = 'User is already registerd',
  UserNotFound = 'User not found',
  UserNameNotUnique = 'User name is not unique',
  SelfFriendship = 'A user cannot befriend themselves',

  // Group
  FailedToleftGroup = '그룹을 나가는데 실패 했습니다.',
  FailedToMakeGroup = '그룹을 생성하는데 실패 했습니다.',

  // Routine
  ExceedMaxRoutines = '등록할 수 있는 최대 루틴을 초과하셨습니다.',

  // Utils
  NotAllowedExtension     = '지원하지 않는 파일 확장자입니다.',
  ThereIsNoFile           = '파일을 업로드 하지 않았습니다.',
  FailedToDeletedOirginal = '원본 파일을 삭제하는데 실패 했습니다.',
  FailedToResizeImage     = '이미지 압축에 실패 했습니다.'
}

@Injectable()
export class DoWithExceptions {
  // =============== [ User ] ===============
  UserAlreadyExists = new DoWithException(
    DoWithErrorMsg.UserAlreadyExists,
    DoWithErrorCode.UserAlreadyExists,
    HttpStatus.BAD_REQUEST,
  );
  UserNotFound = new DoWithException(
    DoWithErrorMsg.UserNotFound,
    DoWithErrorCode.UserNotFound,
    HttpStatus.BAD_REQUEST,
  );
  UserNameNotUnique = new DoWithException(
    DoWithErrorMsg.UserNameNotUnique,
    DoWithErrorCode.UserNameNotUnique,
    HttpStatus.BAD_REQUEST,
  );
  SelfFriendship = new DoWithException(
    DoWithErrorMsg.SelfFriendship,
    DoWithErrorMsg.SelfFriendship,
    HttpStatus.BAD_REQUEST,
  );

  // =============== [ Group ] ===============
  FailedToleftGroup = new DoWithException(
    DoWithErrorMsg.FailedToleftGroup,
    DoWithErrorCode.FailedToleftGroup,
    HttpStatus.BAD_REQUEST,
  );

  FailedToMakeGroup = new DoWithException(
    DoWithErrorMsg.FailedToMakeGroup,
    DoWithErrorCode.FailedToMakeGroup,
    HttpStatus.BAD_REQUEST,
  );
  
  // =============== [ Routine ] ===============
  ExceedMaxRoutines = new DoWithException(
    DoWithErrorMsg.ExceedMaxRoutines,
    DoWithErrorCode.ExceedMaxRoutines,
    HttpStatus.BAD_REQUEST,
  );

  // =============== [ Utils ] ===============
  NotAllowedExtension = new DoWithException(
    DoWithErrorMsg.NotAllowedExtension,
    DoWithErrorCode.NotAllowedExtension,
    HttpStatus.BAD_REQUEST,
  );

  ThereIsNoFile = new DoWithException(
    DoWithErrorMsg.ThereIsNoFile,
    DoWithErrorCode.ThereIsNoFile,
    HttpStatus.BAD_REQUEST,
  );

  FailedToDeletedOirginal = new DoWithException(
    DoWithErrorMsg.FailedToDeletedOirginal,
    DoWithErrorCode.FailedToDeletedOirginal,
    HttpStatus.BAD_REQUEST,
  );

  FailedToResizeImage = new DoWithException(
    DoWithErrorMsg.FailedToResizeImage,
    DoWithErrorCode.FailedToResizeImage,
    HttpStatus.BAD_REQUEST,
  );
}