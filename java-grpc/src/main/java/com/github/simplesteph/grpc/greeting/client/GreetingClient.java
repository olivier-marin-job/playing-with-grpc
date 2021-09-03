package com.github.simplesteph.grpc.greeting.client;

import com.google.protobuf.DoubleValue;
import com.google.protobuf.Int32Value;
import com.proto.calculator.CalculatorServiceGrpc;
import com.proto.calculator.SquareRootRequest;
import com.proto.calculator.SquareRootResponse;
import com.proto.calculator.Values;
import com.proto.greet.*;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import io.grpc.StatusRuntimeException;
import io.grpc.stub.StreamObserver;

import java.util.Arrays;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

public class GreetingClient {

    private ManagedChannel channel;
    private GreetServiceGrpc.GreetServiceBlockingStub greetClient;
    private CalculatorServiceGrpc.CalculatorServiceBlockingStub calcService;

    public static void main(String[] args) {

        GreetingClient gc = new GreetingClient();
        gc.run();
        gc.shutdown();

    }

    public void run(){

        System.out.println("I'm a gRPC client.");
        channel = ManagedChannelBuilder.forAddress("localhost", 50051)
                .usePlaintext() // deactivate ssl since gRPC by default is secured
                .build();

        // created a greet service client (blocking -synchronous)
        greetClient = GreetServiceGrpc.newBlockingStub(channel);

        // prepare calculation service
        calcService = CalculatorServiceGrpc.newBlockingStub(channel);

        doUnaryCall();
//        doServerStreamingCall();
//        doClientStreamingCall();
//        doBidirectionalStreamingCall();
//        doTheCalculationCalls();
//        doCalculationErrorCall();
    }

    public void shutdown(){
        System.out.println("Shutting down the channel");
        channel.shutdown();
    }

    /**
     * GREETING SERVICE WITH UNARY
     */
    private void doUnaryCall(){
        System.out.println("====> running the unary call ...");
        // created protocol buffer greeting message
        Greeting greeting = Greeting.newBuilder()
                .setFirstName("Slimen")
                .setLastName("Arnaout")
                .build();

        GreetRequest request = GreetRequest.newBuilder()
                .setGreeting(greeting)
                .build();

        // call rpc and get GreetResponse (protocol buffer)
        GreetResponse response = greetClient.greet(request);

        System.out.println(response.getResult());
    }

    /**
     * GREETING SERVICE WITH SERVER STREAMING
     */
    private void doServerStreamingCall(){
        System.out.println("====> running the server streaming call ...");
        GreetManyTimesRequest greetManyTimesRequest = GreetManyTimesRequest.newBuilder()
                .setGreeting(Greeting.newBuilder().setFirstName("Slimen"))
                .build();

        greetClient.greetManyTimes(greetManyTimesRequest)
                .forEachRemaining(greetManyTimesResponse -> {
                    System.out.println(greetManyTimesResponse.getResult());
                });
    }

    /**
     * GREETING SERVICE WITH CLIENT STREAMING
     */
    private void doClientStreamingCall(){
        System.out.println("====> running the client streaming call ...");
        // create a client or a stub
        // this time we won't use the blocking stub otherwise we won't find the longGreet method in it
        GreetServiceGrpc.GreetServiceStub asyncClient = GreetServiceGrpc.newStub(channel);

        CountDownLatch latch = new CountDownLatch(1);

        StreamObserver<LongGreetRequest> requestObserver = asyncClient.longGreet(new StreamObserver<LongGreetResponse>() {
            @Override
            public void onNext(LongGreetResponse value) {
                // we get a response from the server
                // onNext will be called only once
                System.out.println("Received a response from the server");
                System.out.println(value.getResult());
            }

            @Override
            public void onError(Throwable t) {
                // we get an error from the server
            }

            @Override
            public void onCompleted() {
                // the server is done sending data
                // onCompleted will be called right after onNext
                System.out.println("Server has completed sending us something");

                // if the server is done sending data
                // the latch goes down by 1
                latch.countDown();
            }
        });

        for(int i = 0; i < 3; i++){
            System.out.println("==> sending message " + (i+1));
            requestObserver.onNext(LongGreetRequest.newBuilder()
                    .setGreeting(Greeting.newBuilder()
                            .setFirstName("Slimen " + i)
                            .build())
                    .build());
        }

        // we tell the server that the client is done sending data
        // because in the server side we keep getting data from the client
        // but we respond only when the request is completed
        // so we need here to tell the server that we are done sending data
        requestObserver.onCompleted();

        // if latch = 0 then this await will complete
        try {
            latch.await(3L, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    private void doBidirectionalStreamingCall(){
        System.out.println("====> running the bi-directional streaming call ...");
        GreetServiceGrpc.GreetServiceStub asyncClient = GreetServiceGrpc.newStub(channel);

        CountDownLatch latch = new CountDownLatch(1);

        StreamObserver<GreetEveryoneRequest> requestObserver = asyncClient.greetEveryone(new StreamObserver<GreetEveryoneResponse>() {
            @Override
            public void onNext(GreetEveryoneResponse value) {
                System.out.println("Response from server: " + value.getResult());
            }

            @Override
            public void onError(Throwable t) {
                latch.countDown();
            }

            @Override
            public void onCompleted() {
                System.out.println("Server is done sending data.");
                latch.countDown();
            }
        });

        Arrays.asList("Slimen", "Omar", "Arbi").forEach(name -> requestObserver.onNext(GreetEveryoneRequest.newBuilder()
                .setGreeting(Greeting.newBuilder().setFirstName(name).build())
                .build()));

        requestObserver.onCompleted();

        try {
            latch.await(3, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    /**
     * CALCULATION SERVICE CALLS
     * tryouts.
     */
    private void doTheCalculationCalls(){
        System.out.println("====> running the calculation tryouts calls ...");
        // ================= unary tryout =====================
        System.out.println("==> The unary call ...");
        Values values = Values.newBuilder()
                .setFirst(15)
                .setSecond(20)
                .build();

        DoubleValue calcResponse = calcService.sum(values);
        System.out.println("sum of 15 & 20 is " + calcResponse.getValue());

        // ================= server streaming tryout =================
        System.out.println("==> The server streaming call ...");
        Int32Value int32Value = Int32Value.newBuilder()
                .setValue(210)
                .build();

        calcService.primeNumberDecomposition(int32Value)
                .forEachRemaining(res -> {
                    System.out.println("values: "+res);
                });
    }

    private void doCalculationErrorCall(){
        CalculatorServiceGrpc.CalculatorServiceBlockingStub service = CalculatorServiceGrpc.newBlockingStub(channel);
        int number = -1;
        try{
            SquareRootResponse response = service.squareRoot(SquareRootRequest.newBuilder()
                    .setNumber(number)
                    .build());
            System.out.println("The result is => " + response.getNumberRoot());
        }catch(StatusRuntimeException e){
            System.out.println("Got an exception for square root!");
            e.printStackTrace();
        }
    }
}
