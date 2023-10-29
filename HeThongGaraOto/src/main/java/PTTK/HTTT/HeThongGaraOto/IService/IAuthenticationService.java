package PTTK.HTTT.HeThongGaraOto.IService;

import PTTK.HTTT.HeThongGaraOto.Config.JwtService;
import PTTK.HTTT.HeThongGaraOto.Entity.Role;
import PTTK.HTTT.HeThongGaraOto.Entity.User;
import PTTK.HTTT.HeThongGaraOto.Respository.UserRepo;
import PTTK.HTTT.HeThongGaraOto.Service.AuthenticationService;
import PTTK.HTTT.HeThongGaraOto.subClass.AuthenticationRequest;
import PTTK.HTTT.HeThongGaraOto.subClass.AuthenticationResponse;
import PTTK.HTTT.HeThongGaraOto.subClass.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class IAuthenticationService implements AuthenticationService {

	@Autowired 
	private UserRepo respository;
	@Autowired 
	private PasswordEncoder passwordEncoder;
	@Autowired 
	private JwtService jwtservice;
	@Autowired 
	private AuthenticationManager authenticationManager;
	@Override
	public AuthenticationResponse register(RegisterRequest request) {
		if(respository.existsByUsername(request.getUsername())) {
			return null;
		}
		User user = new User();
		user.setFirstName(request.getFirstName());
		user.setLastName(request.getLastName());
		user.setAddress(request.getAddress());
		user.setPhone(request.getPhone());
		user.setUsername(request.getUsername());
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		user.setRole(Role.MANAGER);
		respository.save(user);
	return new AuthenticationResponse(user,jwtservice.generateToken(user));
	}

	@Override
	public AuthenticationResponse authencate(AuthenticationRequest request) {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
		} catch (AuthenticationException e) {
			return null;
		}
		var user = respository.findByUsername(request.getUsername()).orElseThrow();
		user.setPassword(null);
		return new AuthenticationResponse(user, jwtservice.generateToken(user));
	}

}
