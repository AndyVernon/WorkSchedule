#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["src/WorkSchedule.WebApp/WorkSchedule.WebApp.csproj", "src/WorkSchedule.WebApp/"]
RUN dotnet restore "src/WorkSchedule.WebApp/WorkSchedule.WebApp.csproj"
COPY . .
WORKDIR "/src/src/WorkSchedule.WebApp"
RUN dotnet build "WorkSchedule.WebApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "WorkSchedule.WebApp.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "WorkSchedule.WebApp.dll"]