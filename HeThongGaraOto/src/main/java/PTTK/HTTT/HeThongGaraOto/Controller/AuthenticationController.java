package PTTK.HTTT.HeThongGaraOto.Controller;


import PTTK.HTTT.HeThongGaraOto.Entity.User;
import PTTK.HTTT.HeThongGaraOto.IService.IAuthenticationService;
import PTTK.HTTT.HeThongGaraOto.subClass.AuthenticationRequest;
import PTTK.HTTT.HeThongGaraOto.subClass.AuthenticationResponse;
import PTTK.HTTT.HeThongGaraOto.subClass.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class AuthenticationController {


	private final IAuthenticationService service;

	@PostMapping("/public/register")
	public ResponseEntity<AuthenticationResponse> register (@RequestBody RegisterRequest request){
		if(service.register(request)==null){
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(service.register(request));
	}
	
	@PostMapping("/public/login")
	public ResponseEntity<AuthenticationResponse> authenticate (@RequestBody AuthenticationRequest request){
		AuthenticationResponse response = service.authencate(request);
		if(response==null){
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		else{
			return ResponseEntity.status(HttpStatus.OK).body(response);
		}
	}

}

