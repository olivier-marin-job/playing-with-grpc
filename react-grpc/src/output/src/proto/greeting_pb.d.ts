import * as jspb from 'google-protobuf'



export class Greeting extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): Greeting;

  getLastName(): string;
  setLastName(value: string): Greeting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Greeting.AsObject;
  static toObject(includeInstance: boolean, msg: Greeting): Greeting.AsObject;
  static serializeBinaryToWriter(message: Greeting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Greeting;
  static deserializeBinaryFromReader(message: Greeting, reader: jspb.BinaryReader): Greeting;
}

export namespace Greeting {
  export type AsObject = {
    firstName: string,
    lastName: string,
  }
}

export class GreetRequest extends jspb.Message {
  getGreeting(): Greeting | undefined;
  setGreeting(value?: Greeting): GreetRequest;
  hasGreeting(): boolean;
  clearGreeting(): GreetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GreetRequest): GreetRequest.AsObject;
  static serializeBinaryToWriter(message: GreetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreetRequest;
  static deserializeBinaryFromReader(message: GreetRequest, reader: jspb.BinaryReader): GreetRequest;
}

export namespace GreetRequest {
  export type AsObject = {
    greeting?: Greeting.AsObject,
  }
}

export class GreetResponse extends jspb.Message {
  getResult(): string;
  setResult(value: string): GreetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GreetResponse): GreetResponse.AsObject;
  static serializeBinaryToWriter(message: GreetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreetResponse;
  static deserializeBinaryFromReader(message: GreetResponse, reader: jspb.BinaryReader): GreetResponse;
}

export namespace GreetResponse {
  export type AsObject = {
    result: string,
  }
}

export class GreetManyTimesRequest extends jspb.Message {
  getGreeting(): Greeting | undefined;
  setGreeting(value?: Greeting): GreetManyTimesRequest;
  hasGreeting(): boolean;
  clearGreeting(): GreetManyTimesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreetManyTimesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GreetManyTimesRequest): GreetManyTimesRequest.AsObject;
  static serializeBinaryToWriter(message: GreetManyTimesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreetManyTimesRequest;
  static deserializeBinaryFromReader(message: GreetManyTimesRequest, reader: jspb.BinaryReader): GreetManyTimesRequest;
}

export namespace GreetManyTimesRequest {
  export type AsObject = {
    greeting?: Greeting.AsObject,
  }
}

export class GreetManyTimesResponse extends jspb.Message {
  getResult(): string;
  setResult(value: string): GreetManyTimesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreetManyTimesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GreetManyTimesResponse): GreetManyTimesResponse.AsObject;
  static serializeBinaryToWriter(message: GreetManyTimesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreetManyTimesResponse;
  static deserializeBinaryFromReader(message: GreetManyTimesResponse, reader: jspb.BinaryReader): GreetManyTimesResponse;
}

export namespace GreetManyTimesResponse {
  export type AsObject = {
    result: string,
  }
}

export class LongGreetRequest extends jspb.Message {
  getGreeting(): Greeting | undefined;
  setGreeting(value?: Greeting): LongGreetRequest;
  hasGreeting(): boolean;
  clearGreeting(): LongGreetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LongGreetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LongGreetRequest): LongGreetRequest.AsObject;
  static serializeBinaryToWriter(message: LongGreetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LongGreetRequest;
  static deserializeBinaryFromReader(message: LongGreetRequest, reader: jspb.BinaryReader): LongGreetRequest;
}

export namespace LongGreetRequest {
  export type AsObject = {
    greeting?: Greeting.AsObject,
  }
}

export class LongGreetResponse extends jspb.Message {
  getResult(): string;
  setResult(value: string): LongGreetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LongGreetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LongGreetResponse): LongGreetResponse.AsObject;
  static serializeBinaryToWriter(message: LongGreetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LongGreetResponse;
  static deserializeBinaryFromReader(message: LongGreetResponse, reader: jspb.BinaryReader): LongGreetResponse;
}

export namespace LongGreetResponse {
  export type AsObject = {
    result: string,
  }
}

export class GreetEveryoneRequest extends jspb.Message {
  getGreeting(): Greeting | undefined;
  setGreeting(value?: Greeting): GreetEveryoneRequest;
  hasGreeting(): boolean;
  clearGreeting(): GreetEveryoneRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreetEveryoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GreetEveryoneRequest): GreetEveryoneRequest.AsObject;
  static serializeBinaryToWriter(message: GreetEveryoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreetEveryoneRequest;
  static deserializeBinaryFromReader(message: GreetEveryoneRequest, reader: jspb.BinaryReader): GreetEveryoneRequest;
}

export namespace GreetEveryoneRequest {
  export type AsObject = {
    greeting?: Greeting.AsObject,
  }
}

export class GreetEveryoneResponse extends jspb.Message {
  getResult(): string;
  setResult(value: string): GreetEveryoneResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreetEveryoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GreetEveryoneResponse): GreetEveryoneResponse.AsObject;
  static serializeBinaryToWriter(message: GreetEveryoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreetEveryoneResponse;
  static deserializeBinaryFromReader(message: GreetEveryoneResponse, reader: jspb.BinaryReader): GreetEveryoneResponse;
}

export namespace GreetEveryoneResponse {
  export type AsObject = {
    result: string,
  }
}

