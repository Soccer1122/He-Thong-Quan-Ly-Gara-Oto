package PTTK.HTTT.HeThongGaraOto.Service;



import PTTK.HTTT.HeThongGaraOto.subClass.AuthenticationRequest;
import PTTK.HTTT.HeThongGaraOto.subClass.AuthenticationResponse;
import PTTK.HTTT.HeThongGaraOto.subClass.RegisterRequest;

public interface AuthenticationService {
	public AuthenticationResponse register (RegisterRequest request);
	public AuthenticationResponse authencate (AuthenticationRequest request);
}
