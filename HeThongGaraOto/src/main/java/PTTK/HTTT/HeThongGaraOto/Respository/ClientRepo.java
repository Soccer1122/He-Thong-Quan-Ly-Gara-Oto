package PTTK.HTTT.HeThongGaraOto.Respository;

import PTTK.HTTT.HeThongGaraOto.Entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepo extends JpaRepository<Client, Long> {

}
