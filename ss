warning: in the working copy of 'Api/pom.xml', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/Api/pom.xml b/Api/pom.xml[m
[1mindex df2b75e..23a93bc 100644[m
[1m--- a/Api/pom.xml[m
[1m+++ b/Api/pom.xml[m
[36m@@ -13,7 +13,7 @@[m
 	<version>0.0.1-SNAPSHOT</version>[m
 	<name>Metropolitan</name>[m
 	<description>Demo project for Spring Boot</description>[m
[31m-	<properties>[m
[32m+[m	[32m<properties>[m[41m [m
 		<java.version>17</java.version>[m
 	</properties>[m
 	<dependencies>[m
[1mdiff --git a/Api/src/main/java/com/Spartan/Metropolitan/Controller/AuthController.java b/Api/src/main/java/com/Spartan/Metropolitan/Controller/AuthController.java[m
[1mindex dd65162..f11158b 100644[m
[1m--- a/Api/src/main/java/com/Spartan/Metropolitan/Controller/AuthController.java[m
[1m+++ b/Api/src/main/java/com/Spartan/Metropolitan/Controller/AuthController.java[m
[36m@@ -4,12 +4,13 @@[m [mpackage com.Spartan.Metropolitan.Controller;[m
 import jakarta.validation.Valid;[m
 import lombok.RequiredArgsConstructor;[m
 import org.springframework.http.ResponseEntity;[m
[32m+[m[32mimport org.springframework.web.bind.annotation.CrossOrigin;[m
 import org.springframework.web.bind.annotation.PostMapping;[m
 import org.springframework.web.bind.annotation.RequestBody;[m
 import org.springframework.web.bind.annotation.RequestMapping;[m
 import org.springframework.web.bind.annotation.RestController;[m
 [m
[31m-[m
[32m+[m[32m@CrossOrigin(origins = "http://localhost:4200")[m
 @RestController[m
 @RequestMapping("/auth")[m
 @RequiredArgsConstructor[m
