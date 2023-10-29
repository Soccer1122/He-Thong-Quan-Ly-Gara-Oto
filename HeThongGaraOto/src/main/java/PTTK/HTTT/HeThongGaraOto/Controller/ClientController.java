package PTTK.HTTT.HeThongGaraOto.Controller;

import PTTK.HTTT.HeThongGaraOto.Entity.Client;
import PTTK.HTTT.HeThongGaraOto.IService.IClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequiredArgsConstructor
public class ClientController {
    private final IClientService service;

    @GetMapping("/private/getClients")
    public ResponseEntity<List<Client>> getAllClient(){
        List <Client> clients;
        clients = service.getAllClients();
        if(clients.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        else{
            return ResponseEntity.status(HttpStatus.OK).body(clients);
        }
    }


}
