## FOR RUM-ACCOUNTS API ##
container_name: "rumacc-api"
docker build . -t swaleh1513/api.rumaccounts:v2
docker-compose up -d
docker exec -it rumacc sh

docker-compose down

## FOR RUM-ACCOUNTS UI ##
container_name: "rumacc-ui"
docker build . -t swaleh1513/ui.rumaccounts:v2
docker-compose up -d
docker exec -it rumacc-ui sh

docker-compose down




https://devblogs.microsoft.com/dotnet/net-core-2-1-container-images-will-be-deleted-from-docker-hub/


For the SDK:


microsoft/dotnet:2.1-sdk -> mcr.microsoft.com/dotnet/sdk:2.1
microsoft/dotnet:2-sdk -> mcr.microsoft.com/dotnet/sdk:2.1
microsoft/dotnet:2.1-sdk-stretch -> mcr.microsoft.com/dotnet/sdk:2.1-stretch
microsoft/dotnet:2.1-sdk-stretch-arm32v7 -> mcr.microsoft.com/dotnet/sdk:2.1-stretch-arm32v7
microsoft/dotnet:2.1-sdk-nanoserver-1809 -> mcr.microsoft.com/dotnet/sdk:2.1-nanoserver-1809
microsoft/dotnet:2.1-sdk-alpine -> mcr.microsoft.com/dotnet/sdk:2.1-alpine
microsoft/dotnet:2.1-sdk-bionic -> mcr.microsoft.com/dotnet/sdk:2.1-bionic
microsoft/dotnet:2.1-sdk-bionic-arm32v7 -> mcr.microsoft.com/dotnet/sdk:2.1-bionic-arm32v7
microsoft/dotnet:latest -> mcr.microsoft.com/dotnet/sdk:2.1


For the ASP.NET Core:


microsoft/dotnet:2.1-aspnetcore-runtime -> mcr.microsoft.com/dotnet/aspnet:2.1
microsoft/dotnet:2-aspnetcore-runtime-> mcr.microsoft.com/dotnet/aspnet:2.1
microsoft/dotnet:2.1-aspnetcore-runtime-stretch-slim -> mcr.microsoft.com/dotnet/aspnet:2.1-stretch-slim
microsoft/dotnet:2.1-aspnetcore-runtime-stretch-slim-arm32v7 -> mcr.microsoft.com/dotnet/aspnet:2.1-stretch-slim-arm32v7
microsoft/dotnet:2.1-aspnetcore-runtime-nanoserver-1809 -> mcr.microsoft.com/dotnet/aspnet:2.1-nanoserver-1809
microsoft/dotnet:2.1-aspnetcore-runtime-alpine -> mcr.microsoft.com/dotnet/aspnet:2.1-alpine
microsoft/dotnet:2.1-aspnetcore-runtime-bionic -> mcr.microsoft.com/dotnet/aspnet:2.1-bionic
microsoft/dotnet:2.1-aspnetcore-runtime-bionic-arm32v7 -> mcr.microsoft.com/dotnet/aspnet:2.1-bionic-arm32v7
microsoft/dotnet:aspnetcore-runtime-> mcr.microsoft.com/dotnet/aspnet:2.1
For .NET Runtime:


microsoft/dotnet:2.1-runtime -> mcr.microsoft.com/dotnet/runtime:2.1
microsoft/dotnet:2-runtime -> mcr.microsoft.com/dotnet/runtime:2.1
microsoft/dotnet:2.1-runtime-stretch-slim -> mcr.microsoft.com/dotnet/runtime:2.1-stretch-slim
microsoft/dotnet:2.1-runtime-stretch-slim-arm32v7 -> mcr.microsoft.com/dotnet/runtime:2.1-stretch-slim-arm32v7
microsoft/dotnet:2.1-runtime-nanoserver-1809 -> mcr.microsoft.com/dotnet/runtime:2.1-nanoserver-1809
microsoft/dotnet:2.1-runtime-alpine -> mcr.microsoft.com/dotnet/runtime:2.1-alpine
microsoft/dotnet:2.1-runtime-bionic -> mcr.microsoft.com/dotnet/runtime:2.1-bionic
microsoft/dotnet:2.1-runtime-bionic-arm32v7 -> mcr.microsoft.com/dotnet/runtime:2.1-bionic-arm32v7
microsoft/dotnet:runtime -> mcr.microsoft.com/dotnet/runtime:2.1
For .NET Runtime dependencies:


microsoft/dotnet:2.1-runtime-deps -> mcr.microsoft.com/dotnet/runtime-deps:2.1
microsoft/dotnet:2.1-runtime-deps-stretch-slim -> mcr.microsoft.com/dotnet/runtime-deps:2.1-stretch-slim
microsoft/dotnet:2.1-runtime-deps-stretch-slim-arm32v7 -> mcr.microsoft.com/dotnet/runtime-deps:2.1-stretch-slim-arm32v7
microsoft/dotnet:2.1-runtime-deps-alpine -> mcr.microsoft.com/dotnet/runtime-deps:2.1-alpine
microsoft/dotnet:2.1-runtime-deps-bionic -> mcr.microsoft.com/dotnet/runtime-deps:2.1-bionic
microsoft/dotnet:2.1-runtime-deps-bionic-arm32v7 -> mcr.microsoft.com/dotnet/runtime-deps:2.1-bionic-arm32v7
microsoft/dotnet:runtime-deps -> mcr.microsoft.com/dotnet/runtime-deps:2.1




