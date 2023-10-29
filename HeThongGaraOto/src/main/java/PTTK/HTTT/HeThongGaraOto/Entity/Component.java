package PTTK.HTTT.HeThongGaraOto.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tbl_component")
public class Component {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "manufacturer")
    private String manufacturer;

    @Column(name = "price")
    private float price;

    @Column(name = "quantity")
    private String quantity;

    @Column(name = "des")
    private String des;

    @OneToMany( mappedBy = "component", cascade = CascadeType.ALL)
    private List<UsedComponent> usedComponentList;
}
