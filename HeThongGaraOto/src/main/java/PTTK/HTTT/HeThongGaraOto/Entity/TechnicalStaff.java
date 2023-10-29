package PTTK.HTTT.HeThongGaraOto.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "technical_staff")
@Entity
public class TechnicalStaff {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "is_free")
    private boolean isFree;


    @Column(name = "user_id")
    private long userId;

    @OneToMany(mappedBy = "technicalStaff", cascade = CascadeType.ALL)
    private List<Payroll> payrollLis;

    @OneToMany(mappedBy =  "technicalStaff", cascade = CascadeType.ALL)
    private List<RepairAssignment> repairAssignmentList;
}
