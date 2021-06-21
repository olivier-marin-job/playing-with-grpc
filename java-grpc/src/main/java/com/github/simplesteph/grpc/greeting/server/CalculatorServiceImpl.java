package com.github.simplesteph.grpc.greeting.server;

import com.google.protobuf.DoubleValue;
import com.google.protobuf.Int32Value;
import com.proto.calculator.CalculatorServiceGrpc;
import com.proto.calculator.SquareRootRequest;
import com.proto.calculator.SquareRootResponse;
import com.proto.calculator.Values;
import io.grpc.Status;
import io.grpc.stub.StreamObserver;

public class CalculatorServiceImpl extends CalculatorServiceGrpc.CalculatorServiceImplBase {

    @Override
    public void sum(Values request, StreamObserver<DoubleValue> responseObserver) {
        double result = request.getFirst() + request.getSecond();

        DoubleValue response = DoubleValue.newBuilder()
                .setValue(result)
                .build();

        responseObserver.onNext(response);

        responseObserver.onCompleted();
    }

    @Override
    public void diff(Values request, StreamObserver<DoubleValue> responseObserver) {
        super.diff(request, responseObserver);
    }

    @Override
    public void multiply(Values request, StreamObserver<DoubleValue> responseObserver) {
        super.multiply(request, responseObserver);
    }

    @Override
    public void divide(Values request, StreamObserver<DoubleValue> responseObserver) {
        super.divide(request, responseObserver);
    }

    @Override
    public void primeNumberDecomposition(Int32Value request, StreamObserver<Int32Value> responseObserver) {
        double number = (double) request.getValue();

        int k = 2;
        try{
            while (number > 1) {
                if (number % k == 0) {   // if k evenly divides into N
                    System.out.println("K: " + k);      // this is a factor
                    number = number / k;   // divide N by k so that we have the rest of the number left.
                    Int32Value response = Int32Value.newBuilder()
                            .setValue(k)
                            .build();
                    responseObserver.onNext(response);
                    Thread.sleep(1000);
                } else {
                    k = k + 1;
                }
            }
        }catch(InterruptedException e){
            e.printStackTrace();
        }

        responseObserver.onCompleted();

    }

    @Override
    public void squareRoot(SquareRootRequest request, StreamObserver<SquareRootResponse> responseObserver) {
        Integer number = request.getNumber();

        if(number >= 0){
            double numberRoot = Math.sqrt(number);
            responseObserver.onNext(
                SquareRootResponse.newBuilder()
                        .setNumberRoot(numberRoot)
                        .build()
            );
            responseObserver.onCompleted();
        }else{
            // we construct the exception
            responseObserver.onError(
                    Status.INVALID_ARGUMENT
                    .withDescription("The number being sent is not positive!")
                            .augmentDescription("Number sent: " + number)
                    .asRuntimeException()
            );
        }
    }
}
