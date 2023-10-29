package PTTK.HTTT.HeThongGaraOto.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tbl_repair_assignment")
public class RepairAssignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "time")
    private Date time;

    @ManyToOne()
    @JoinColumn(name = "repaired_car_id", nullable = false)
    private RepairedCar repairedCar;

   @ManyToOne()
   @JoinColumn(name = "slot_id")
    private Slot slot;

    @ManyToOne()
    @JoinColumn(name = "technicall_staff_id")
    private TechnicalStaff technicalStaff;
}
