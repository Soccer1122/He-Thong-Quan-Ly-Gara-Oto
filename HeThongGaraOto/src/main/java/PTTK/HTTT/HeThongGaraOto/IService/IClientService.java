package PTTK.HTTT.HeThongGaraOto.IService;


import PTTK.HTTT.HeThongGaraOto.Entity.Client;
import PTTK.HTTT.HeThongGaraOto.Respository.ClientRepo;
import PTTK.HTTT.HeThongGaraOto.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class IClientService implements ClientService {

    @Autowired
    private ClientRepo repo;
    @Override
    public List<Client> getAllClients() {
        return repo.findAll();
    }

}
