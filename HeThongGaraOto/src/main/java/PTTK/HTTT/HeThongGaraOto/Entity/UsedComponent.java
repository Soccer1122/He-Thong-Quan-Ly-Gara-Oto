package PTTK.HTTT.HeThongGaraOto.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tbl_used_component")
public class UsedComponent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "quantity")
    private int quantity;

    @ManyToOne()
    @JoinColumn(name = "component_id")
    private Component component;

    @ManyToOne()
    @JoinColumn(name = "repaired_car_id")
    private RepairedCar repairedCar;
}
