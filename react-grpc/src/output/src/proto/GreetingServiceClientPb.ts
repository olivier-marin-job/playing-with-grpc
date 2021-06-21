/**
 * @fileoverview gRPC-Web generated client stub for greet
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as src_proto_greeting_pb from '../../src/proto/greeting_pb';


export class GreetingServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfogreet = new grpcWeb.AbstractClientBase.MethodInfo(
    src_proto_greeting_pb.GreetResponse,
    (request: src_proto_greeting_pb.GreetRequest) => {
      return request.serializeBinary();
    },
    src_proto_greeting_pb.GreetResponse.deserializeBinary
  );

  greet(
    request: src_proto_greeting_pb.GreetRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_proto_greeting_pb.GreetResponse>;

  greet(
    request: src_proto_greeting_pb.GreetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_proto_greeting_pb.GreetResponse) => void): grpcWeb.ClientReadableStream<src_proto_greeting_pb.GreetResponse>;

  greet(
    request: src_proto_greeting_pb.GreetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_proto_greeting_pb.GreetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/greet.GreetingService/greet',
        request,
        metadata || {},
        this.methodInfogreet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/greet.GreetingService/greet',
    request,
    metadata || {},
    this.methodInfogreet);
  }

}

