#! /bin/bash

cd src/main/proto;

find . -type f -name *.proto | while read proto
do
  protoc -I="./" --plugin=protoc-gen-grpc-java=/usr/local/bin/protoc-gen-grpc-java-1.40.1-linux-x86_64.exe \
    --grpc-java_out="./../../../src/main/java" \
    --java_out="./../../../src/main/java" "$proto"
done

cd -;
