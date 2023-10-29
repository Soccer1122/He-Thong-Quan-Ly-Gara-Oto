package PTTK.HTTT.HeThongGaraOto.subClass;

import PTTK.HTTT.HeThongGaraOto.Entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
	private User user;
	private String token;
	
}
