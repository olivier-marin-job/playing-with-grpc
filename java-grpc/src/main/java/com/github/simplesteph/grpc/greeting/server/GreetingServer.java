package com.github.simplesteph.grpc.greeting.server;

import io.grpc.Server;
import io.grpc.ServerBuilder;

import java.io.IOException;

public class GreetingServer {

    public static void main(String[] args) throws IOException, InterruptedException {
        final int PORT = 9090;

        System.out.println("Hello gRPC, used port: "+PORT);

        Server server = ServerBuilder.forPort(PORT)
                .addService(new GreetServiceImpl())
                .addService(new CalculatorServiceImpl())
                .build();
        server.start();

        System.out.println("Server started !");

        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            System.out.println("Received shut down request");
            server.shutdown();
            System.out.println("Successfully stopped the server");
        }));

        server.awaitTermination();
    }
}
