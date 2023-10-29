package PTTK.HTTT.HeThongGaraOto.Respository;

import PTTK.HTTT.HeThongGaraOto.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User,Long> {
    Optional <User>findByUsername(String username);
    boolean  existsByUsername(String username);
}
