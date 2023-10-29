package PTTK.HTTT.HeThongGaraOto.subClass;

import PTTK.HTTT.HeThongGaraOto.Entity.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String firstName;
    private String lastName;
    private String address;
    private String phone;
    private String username;
    private String password;
    private Role role;
}
