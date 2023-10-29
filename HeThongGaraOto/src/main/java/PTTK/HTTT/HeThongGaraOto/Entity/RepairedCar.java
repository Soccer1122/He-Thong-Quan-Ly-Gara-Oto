package PTTK.HTTT.HeThongGaraOto.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tbl_repaired_car")
public class RepairedCar {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "time")
    private Date time;

    @Column(name = "des")
    private String des;

    @ManyToOne()
    @JoinColumn(name = "car_id")
    private Car car;

    @ManyToOne()
    @JoinColumn(name = "bill_id")
    private Bill bill;

    @OneToMany( mappedBy = "repairedCar",cascade = CascadeType.ALL)
    private List<UsedService> usedServiceList;

    @OneToMany( mappedBy = "repairedCar",cascade = CascadeType.ALL)
    private List<UsedComponent> usedComponentList;

    @OneToMany( mappedBy = "repairedCar",cascade = CascadeType.ALL)
    private List<RepairAssignment> repairAssignmentList;

}
