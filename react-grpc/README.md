more details about gRPC-web https://grpc.io/blog/grpc-web-ga/

first download `protoc-gen-grpc-web` from here https://github.com/grpc/grpc-web/releases
and add it to the environment path

install grpc-web:

`npm i grpc-web`

then run this command to generate proto files (ts version):
```
protoc ./src/proto/greeting.proto --js_out=import_style=commonjs:./src/output --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/output
```

Why we use envoy when using grpc for js client:

when calling directly the backend from the client, the client will send a request over HTTP/1
which is not supported by gRPC because it uses HTTP/2, and this is the error we receive in the backend:
`io.grpc.netty.shaded.io.netty.handler.codec.http2.Http2Exception: Unexpected HTTP/1.x request: OPTIONS /greet.GreetingService/greet`

to solve this check this link: https://github.com/grpc/grpc-java/issues/7377

```
The use of HTTP/2 is (was) pretty fundamental to the design of gRPC. 
grpc-web was developed using HTTP 1.x because most browsers did not support 
the HTTP/2 protocol. This does lead to the lack of direct compatibility between 
gRPC servers, speaking HTTP/2, and these grpc-web clients, speaking HTTP/1.x. 
The recommended approach to handle this is to proxy the grpc-web client through Envoy, 
as described in their helloworld example: https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/helloworld#configure-the-proxy. 
Envoy will handle the translation between HTTP1 and HTTP2.
```