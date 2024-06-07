// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file auth/v1/auth.proto (package proto.services.auth.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * The User message represents a user in the system.
 *
 * @generated from message proto.services.auth.v1.User
 */
export class User extends Message<User> {
  /**
   * The unique identifier of the user.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * The username of the user.
   *
   * @generated from field: string username = 2;
   */
  username = "";

  /**
   * The email of the user.
   *
   * @generated from field: string email = 3;
   */
  email = "";

  constructor(data?: PartialMessage<User>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.services.auth.v1.User";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User {
    return new User().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User {
    return new User().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User {
    return new User().fromJsonString(jsonString, options);
  }

  static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean {
    return proto3.util.equals(User, a, b);
  }
}

/**
 * The LoginRequest message contains login info.
 *
 * @generated from message proto.services.auth.v1.LoginRequest
 */
export class LoginRequest extends Message<LoginRequest> {
  /**
   * The username or email for login.
   *
   * @generated from field: string username_or_email = 1;
   */
  usernameOrEmail = "";

  /**
   * The password for login.
   *
   * @generated from field: string password = 2;
   */
  password = "";

  constructor(data?: PartialMessage<LoginRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.services.auth.v1.LoginRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "username_or_email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginRequest {
    return new LoginRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginRequest {
    return new LoginRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginRequest {
    return new LoginRequest().fromJsonString(jsonString, options);
  }

  static equals(a: LoginRequest | PlainMessage<LoginRequest> | undefined, b: LoginRequest | PlainMessage<LoginRequest> | undefined): boolean {
    return proto3.util.equals(LoginRequest, a, b);
  }
}

/**
 * The LoginResponse message contains user info and a JWT token.
 *
 * @generated from message proto.services.auth.v1.LoginResponse
 */
export class LoginResponse extends Message<LoginResponse> {
  /**
   * The user's information.
   *
   * @generated from field: proto.services.auth.v1.User user = 1;
   */
  user?: User;

  /**
   * The JWT token for the session.
   *
   * @generated from field: string token = 2;
   */
  token = "";

  constructor(data?: PartialMessage<LoginResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.services.auth.v1.LoginResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: User },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginResponse {
    return new LoginResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginResponse {
    return new LoginResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginResponse {
    return new LoginResponse().fromJsonString(jsonString, options);
  }

  static equals(a: LoginResponse | PlainMessage<LoginResponse> | undefined, b: LoginResponse | PlainMessage<LoginResponse> | undefined): boolean {
    return proto3.util.equals(LoginResponse, a, b);
  }
}

/**
 * The SignupRequest message contains signup info.
 *
 * @generated from message proto.services.auth.v1.SignupRequest
 */
export class SignupRequest extends Message<SignupRequest> {
  /**
   * The desired username for the new user.
   *
   * @generated from field: string username = 1;
   */
  username = "";

  /**
   * The desired password for the new user.
   *
   * @generated from field: string password = 2;
   */
  password = "";

  /**
   * The email for the new user.
   *
   * @generated from field: string email = 3;
   */
  email = "";

  constructor(data?: PartialMessage<SignupRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.services.auth.v1.SignupRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignupRequest {
    return new SignupRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignupRequest {
    return new SignupRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignupRequest {
    return new SignupRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SignupRequest | PlainMessage<SignupRequest> | undefined, b: SignupRequest | PlainMessage<SignupRequest> | undefined): boolean {
    return proto3.util.equals(SignupRequest, a, b);
  }
}

/**
 * The SignupResponse message contains user info and a JWT token.
 *
 * @generated from message proto.services.auth.v1.SignupResponse
 */
export class SignupResponse extends Message<SignupResponse> {
  /**
   * The new user's information.
   *
   * @generated from field: proto.services.auth.v1.User user = 1;
   */
  user?: User;

  /**
   * The JWT token for the session.
   *
   * @generated from field: string token = 2;
   */
  token = "";

  constructor(data?: PartialMessage<SignupResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.services.auth.v1.SignupResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: User },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignupResponse {
    return new SignupResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignupResponse {
    return new SignupResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignupResponse {
    return new SignupResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SignupResponse | PlainMessage<SignupResponse> | undefined, b: SignupResponse | PlainMessage<SignupResponse> | undefined): boolean {
    return proto3.util.equals(SignupResponse, a, b);
  }
}

/**
 * The GetMeRequest message contains a JWT token.
 *
 * @generated from message proto.services.auth.v1.GetMeRequest
 */
export class GetMeRequest extends Message<GetMeRequest> {
  /**
   * The JWT token of the current session.
   *
   * @generated from field: string token = 1;
   */
  token = "";

  constructor(data?: PartialMessage<GetMeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.services.auth.v1.GetMeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMeRequest {
    return new GetMeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMeRequest {
    return new GetMeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMeRequest {
    return new GetMeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetMeRequest | PlainMessage<GetMeRequest> | undefined, b: GetMeRequest | PlainMessage<GetMeRequest> | undefined): boolean {
    return proto3.util.equals(GetMeRequest, a, b);
  }
}

/**
 * The GetMeResponse message contains user info.
 *
 * @generated from message proto.services.auth.v1.GetMeResponse
 */
export class GetMeResponse extends Message<GetMeResponse> {
  /**
   * The current user's information.
   *
   * @generated from field: proto.services.auth.v1.User user = 1;
   */
  user?: User;

  constructor(data?: PartialMessage<GetMeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.services.auth.v1.GetMeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: User },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMeResponse {
    return new GetMeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMeResponse {
    return new GetMeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMeResponse {
    return new GetMeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetMeResponse | PlainMessage<GetMeResponse> | undefined, b: GetMeResponse | PlainMessage<GetMeResponse> | undefined): boolean {
    return proto3.util.equals(GetMeResponse, a, b);
  }
}

